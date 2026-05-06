// Vercel serverless function — shared notes store backed by Vercel Blob.
//
// Setup:
//   1. npm install @vercel/blob
//   2. In your Vercel project, create a Blob store: Storage → Create → Blob
//   3. `vercel link` and `vercel env pull .env.local` so BLOB_READ_WRITE_TOKEN
//      is available in dev. In production, Vercel injects it automatically.
//
// Endpoints (all relative to /api/notes):
//   GET                  → { notes: [...] }              (all public notes)
//   POST  { note: {...} } → { ok: true, note: {...} }    (upsert by id)
//   DELETE ?id=<noteId>  → { ok: true }                  (remove by id)
//
// Concurrency: read-modify-write per request. Last-write-wins on simultaneous
// edits to the same note. Adequate for small-team brand boards; switch to
// Vercel KV / Postgres if you outgrow it.

import { put, list } from "@vercel/blob";

const FILE = "brandboard/notes.json";

async function readAll() {
  try {
    const { blobs } = await list({ prefix: "brandboard/notes" });
    const blob = blobs.find(b => b.pathname === FILE);
    if (!blob) return [];
    const r = await fetch(blob.url, { cache: "no-store" });
    if (!r.ok) return [];
    const data = await r.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

async function writeAll(notes) {
  await put(FILE, JSON.stringify(notes), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
    cacheControlMaxAge: 0,
  });
}

function applyCors(res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  applyCors(res);
  if (req.method === "OPTIONS") return res.status(204).end();

  try {
    if (req.method === "GET") {
      const notes = await readAll();
      return res.status(200).json({ notes });
    }

    if (req.method === "POST") {
      // body may be { note } or a bare note
      const body = req.body && typeof req.body === "object" ? req.body : {};
      const incoming = body.note || body;
      if (!incoming || !incoming.id) {
        return res.status(400).json({ error: "note.id is required" });
      }
      // server is the source of truth for non-private notes only
      if (incoming.isPrivate) {
        return res.status(400).json({ error: "private notes are not synced" });
      }
      const notes = await readAll();
      const idx = notes.findIndex(n => n.id === incoming.id);
      if (idx >= 0) notes[idx] = { ...notes[idx], ...incoming };
      else notes.push(incoming);
      await writeAll(notes);
      return res.status(200).json({ ok: true, note: incoming });
    }

    if (req.method === "DELETE") {
      const id = (req.query && req.query.id) || (req.body && req.body.id);
      if (!id) return res.status(400).json({ error: "id is required" });
      const notes = await readAll();
      const next = notes.filter(n => n.id !== id);
      await writeAll(next);
      return res.status(200).json({ ok: true });
    }

    return res.status(405).json({ error: "Method not allowed" });
  } catch (e) {
    console.error("[/api/notes]", e);
    return res.status(500).json({ error: e.message || "internal error" });
  }
}
