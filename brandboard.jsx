import { useState, useEffect, useRef, useCallback } from "react";
import {
  ArrowLeft,
  Bell,
  BellSlash,
  CalendarBlank,
  CaretDown,
  CaretLeft,
  CaretRight,
  Check,
  CheckCircle,
  ChatCircle,
  Circle,
  Heart,
  ImageSquare,
  LinkSimple,
  MagnifyingGlass,
  Microphone,
  Moon,
  PencilSimple,
  Plus,
  SignOut,
  Sun,
  UserPlus,
  X,
} from "@phosphor-icons/react";

// ─── Two themes only (system default) ────────────────────────────────────────
const DARK = {
  bg: "#0e0e13", surface: "#151519", sh: "#1a1a1f",
  border: "rgba(255,255,255,0.15)", text: "rgba(255,255,255,0.96)", muted: "rgba(255,255,255,0.64)", dim: "rgba(255,255,255,0.38)",
  accent: "#ff461e", accentBg: "rgba(255,70,30,0.13)", accentGlow: "rgba(255,70,30,0.28)",
  inputBg: "#111116", modal: "rgba(14,14,19,0.74)",
};
const LIGHT = {
  bg: "#ffffff", surface: "#f3f3f3", sh: "#ececec",
  border: "rgba(14,14,19,0.14)", text: "rgba(14,14,19,0.95)", muted: "rgba(14,14,19,0.62)", dim: "rgba(14,14,19,0.42)",
  accent: "#ff461e", accentBg: "rgba(255,70,30,0.10)", accentGlow: "rgba(255,70,30,0.22)",
  inputBg: "#ffffff", modal: "rgba(14,14,19,0.45)",
};

const TAGS = ["Marketing", "HR Brand", "Business", "PR", "Other"];
const TAG_C = {
  "Marketing": { bg: "rgba(255,70,30,0.13)",  text: "#ff704f", bd: "rgba(255,70,30,0.34)" },
  "HR Brand":  { bg: "rgba(182,102,255,0.13)", text: "#b666ff", bd: "rgba(182,102,255,0.34)" },
  "Business":  { bg: "rgba(107,127,255,0.13)", text: "#8c9aff", bd: "rgba(107,127,255,0.34)" },
  "PR":        { bg: "rgba(34,196,138,0.13)",  text: "#22c48a", bd: "rgba(34,196,138,0.34)" },
  "Other":     { bg: "rgba(240,168,48,0.13)",  text: "#f0a830", bd: "rgba(240,168,48,0.34)" },
};
const AV_COLORS = ["#ff461e","#6b7fff","#22c48a","#b666ff","#f0a830","#ff5c5c","#8cb4ff","#f6c75f"];
const SANS = "'Aeonic Pro', 'Aeonik Pro', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif";
const MONO = SANS;
const IDEA_TEMPLATES = [
  {
    title: "Customer language we should reuse",
    body: "Paste a real sentence from a client, candidate, or partner. Add where it came from and what it reveals about the brand.",
    tag: "Marketing",
  },
  {
    title: "A small moment that feels like us",
    body: "Capture a product detail, support reply, onboarding line, or workshop habit that could become part of the brand system.",
    tag: "HR Brand",
  },
  {
    title: "What changed our mind this week",
    body: "Write down an assumption the team adjusted, what evidence changed it, and how we could share that more openly.",
    tag: "PR",
  },
  {
    title: "Decision helper for buyers",
    body: "Frame a common customer decision as a quick scenario: who they are, what they compare, and what would make the choice easier.",
    tag: "Business",
  },
];

// ─── Utilities ────────────────────────────────────────────────────────────────
const gid = () => `${Date.now().toString(36)}-${Math.random().toString(36).slice(2,7)}`;
function ago(iso) {
  const s = (Date.now() - new Date(iso)) / 1000 | 0;
  if (s < 60)     return "just now";
  if (s < 3600)   return `${s / 60    | 0}m ago`;
  if (s < 86400)  return `${s / 3600  | 0}h ago`;
  if (s < 604800) return `${s / 86400 | 0}d ago`;
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric" });
}
const ft = iso => new Date(iso).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
const fd = iso => new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
const replyStamp = iso => {
  const d = new Date(iso);
  const today = ymd(d) === ymd(new Date());
  return `Last reply ${today ? "today" : fd(iso)} at ${ft(iso)}`;
};
const ymd = iso => {
  const d = new Date(iso);
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
};
const monthLabel = date => date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
const sameMonth = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
const addMonths = (date, delta) => new Date(date.getFullYear(), date.getMonth() + delta, 1);
function monthDays(monthDate) {
  const start = new Date(monthDate.getFullYear(), monthDate.getMonth(), 1);
  const end = new Date(monthDate.getFullYear(), monthDate.getMonth() + 1, 0);
  const firstOffset = (start.getDay() + 6) % 7;
  const days = [];
  for (let i = 0; i < firstOffset; i++) days.push(new Date(start.getFullYear(), start.getMonth(), i - firstOffset + 1));
  for (let d = 1; d <= end.getDate(); d++) days.push(new Date(start.getFullYear(), start.getMonth(), d));
  while (days.length % 7) {
    const last = days[days.length - 1];
    days.push(new Date(last.getFullYear(), last.getMonth(), last.getDate() + 1));
  }
  return days;
}
const systemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
function makeAnonIdentity() {
  const color = AV_COLORS[Math.floor(Math.random() * AV_COLORS.length)];
  const code  = Math.random().toString(36).slice(2, 6).toUpperCase();
  return { id: gid(), name: `User·${code}`, color };
}
const normalizeEmail = email => (email || "").trim().toLowerCase();
const isAltyEmail = email => /^[^\s@]+@alty\.co$/i.test(normalizeEmail(email));
function nameFromEmail(email) {
  const local = normalizeEmail(email).split("@")[0] || "team";
  return local
    .split(/[._-]+/)
    .filter(Boolean)
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ") || "Alty Team";
}
function makeTeamIdentity(email) {
  const clean = normalizeEmail(email);
  let hash = 0;
  for (let i = 0; i < clean.length; i++) hash = (hash + clean.charCodeAt(i) * (i + 1)) % AV_COLORS.length;
  return { id: `alty:${clean}`, email: clean, name: nameFromEmail(clean), color: AV_COLORS[hash] };
}
const isValidIdentity = identity => identity?.email && isAltyEmail(identity.email);
function mergeAccounts(...lists) {
  const byEmail = new Map();
  lists.flat().filter(isValidIdentity).forEach(account => {
    byEmail.set(normalizeEmail(account.email), {
      ...account,
      id: account.id || `alty:${normalizeEmail(account.email)}`,
      email: normalizeEmail(account.email),
      name: account.name || nameFromEmail(account.email),
      color: account.color || makeTeamIdentity(account.email).color,
    });
  });
  return [...byEmail.values()];
}
const blobToDataUrl = blob => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
  reader.readAsDataURL(blob);
});
const fileToImage = file => new Promise((resolve, reject) => {
  const url = URL.createObjectURL(file);
  const img = new Image();
  img.onload = () => { URL.revokeObjectURL(url); resolve(img); };
  img.onerror = err => { URL.revokeObjectURL(url); reject(err); };
  img.src = url;
});
async function imageFileToWebp(file, maxSide = 1800, quality = 0.82) {
  try {
    const img = await fileToImage(file);
    const scale = Math.min(1, maxSide / Math.max(img.naturalWidth || img.width, img.naturalHeight || img.height));
    const width = Math.max(1, Math.round((img.naturalWidth || img.width) * scale));
    const height = Math.max(1, Math.round((img.naturalHeight || img.height) * scale));
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, width, height);
    const blob = await new Promise(resolve => canvas.toBlob(resolve, "image/webp", quality));
    if (!blob) throw new Error("WebP conversion failed.");
    return {
      dataUrl: await blobToDataUrl(blob),
      mime: "image/webp",
      size: blob.size,
      width,
      height,
    };
  } catch {
    return {
      dataUrl: await blobToDataUrl(file),
      mime: file.type || "image/webp",
      size: file.size,
    };
  }
}
const extFromMime = mime => ({
  "image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/gif": ".gif",
  "audio/webm": ".webm", "audio/mp4": ".m4a", "audio/mpeg": ".mp3", "audio/wav": ".wav",
})[(mime || "").split(";")[0]] || "";
const slugFromText = text => (text || "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "")
  .slice(0, 38);
const titleFromText = text => {
  const clean = (text || "").replace(/\s+/g, " ").trim();
  if (!clean) return "";
  return clean.length > 56 ? `${clean.slice(0, 53)}...` : clean;
};
function makeAttachmentName(type, source, index, iso, mime) {
  const base = slugFromText(source) || `brandboard-${type}`;
  const stamp = new Date(iso || Date.now()).toISOString().slice(0, 10).replace(/-/g, "");
  return `${base}-${type}-${stamp}-${String(index).padStart(2, "0")}${extFromMime(mime)}`;
}
const fmtDur = ms => {
  const total = Math.max(0, Math.round((ms || 0) / 1000));
  const m = Math.floor(total / 60);
  const s = String(total % 60).padStart(2, "0");
  return `${m}:${s}`;
};
const fmtSize = bytes => {
  if (!bytes) return "";
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

// ─── Storage ──────────────────────────────────────────────────────────────────
const db = {
  async notes()    { try { const r = await window.storage.get("bb-notes",  true);  return r ? JSON.parse(r.value) : []; }  catch { return []; } },
  async sNotes(n)  { try { await window.storage.set("bb-notes",  JSON.stringify(n), true);  } catch {} },
  async likes()    { try { const r = await window.storage.get("bb-likes",  true);  return r ? JSON.parse(r.value) : {}; } catch { return {}; } },
  async sLikes(l)  { try { await window.storage.set("bb-likes",  JSON.stringify(l), true);  } catch {} },
  async get(k)     { try { const r = await window.storage.get(`bb-${k}`,   false); return r ? JSON.parse(r.value) : null; } catch { return null; } },
  async set(k, v)  { try { await window.storage.set(`bb-${k}`,   JSON.stringify(v), false); } catch {} },
};

// ─── TagPill ──────────────────────────────────────────────────────────────────
function TagPill({ tag, sm }) {
  if (!tag) return null;
  const c = TAG_C[tag] || TAG_C["Other"];
  return (
    <span style={{
      display: "inline-flex", alignItems: "center",
      padding: sm ? "3px 8px" : "4px 10px", borderRadius: 999,
      fontSize: sm ? 9 : 10, background: c.bg, color: c.text,
      border: `1px solid ${c.bd}`, fontFamily: MONO, fontWeight: 500,
      letterSpacing: "0", whiteSpace: "nowrap",
    }}>{tag}</span>
  );
}

function AttachmentStrip({ attachments }) {
  const list = attachments || [];
  if (!list.length) return null;
  const images = list.filter(a => a.type === "image");
  const voices = list.filter(a => a.type === "voice");
  return (
    <div className="att-strip" onClick={e => e.stopPropagation()}>
      <ImageCollage images={images} />
      {voices.map(a => (
        <span key={a.id} className="att-pill" title={a.transcript || a.name}>
          <Microphone size={12} weight="bold" />
          {fmtDur(a.durationMs)}
        </span>
      ))}
    </div>
  );
}

function ImageCollage({ images, detail = false }) {
  const list = (images || []).slice(0, 10);
  if (!list.length) return null;
  const visible = list.slice(0, Math.min(list.length, 5));
  const extra = list.length - visible.length;
  return (
    <div className={`img-collage count-${Math.min(list.length, 5)}${detail ? " detail" : ""}`}>
      {visible.map((image, i) => (
        <div className="img-cell" key={image.id || image.name || i}>
          <img src={image.dataUrl} alt={image.name || "Idea attachment"} />
          {extra > 0 && i === visible.length - 1 && <span className="img-extra">+{extra}</span>}
        </div>
      ))}
    </div>
  );
}

function AttachmentDetailList({ attachments }) {
  const list = attachments || [];
  if (!list.length) return null;
  const images = list.filter(a => a.type === "image");
  const voices = list.filter(a => a.type === "voice");
  return (
    <div className="att-detail-list">
      <ImageCollage images={images} detail />
      {voices.map(a => (
        <div key={a.id} className="att-detail">
          <div className="att-voice">
            <audio controls src={a.dataUrl} />
            {a.transcript && <p className="att-transcript">{a.transcript}</p>}
          </div>
          <div className="att-caption">
            <span>{a.name}</span>
            <span>{fmtDur(a.durationMs)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function UserAvatar({ name, color, size = 24 }) {
  return (
    <span
      className="user-avatar"
      style={{ width: size, height: size, background: color || "var(--accent)", fontSize: Math.max(8, Math.round(size * 0.36)) }}
    >
      {(name || "?").charAt(0).toUpperCase()}
    </span>
  );
}

function CommentSummary({ comments }) {
  const list = comments || [];
  if (!list.length) return null;
  const last = list[list.length - 1];
  const unique = [];
  list.forEach(comment => {
    if (!unique.some(item => item.authorId === comment.authorId)) unique.push(comment);
  });
  return (
    <div className="comment-summary">
      <div className="comment-avatars">
        {unique.slice(0, 3).map(comment => (
          <UserAvatar key={comment.id} name={comment.author} color={comment.authorColor} size={25} />
        ))}
      </div>
      <span className="comment-count">{list.length} repl{list.length === 1 ? "y" : "ies"}</span>
      <span className="comment-last">{replyStamp(last.createdAt)}</span>
    </div>
  );
}

function CommentsPanel({ comments, value, onChange, onSubmit, disabled }) {
  const list = comments || [];
  return (
    <div className="comments-panel">
      <div className="comments-head">
        <ChatCircle size={16} />
        <span>{list.length} repl{list.length === 1 ? "y" : "ies"}</span>
      </div>
      {list.length > 0 && (
        <div className="comment-list">
          {list.map(comment => (
            <div className="comment-item" key={comment.id}>
              <UserAvatar name={comment.author} color={comment.authorColor} size={30} />
              <div className="comment-body">
                <div className="comment-meta">
                  <strong>{comment.author}</strong>
                  <span>{ago(comment.createdAt)}</span>
                </div>
                <p><Linkify text={comment.body} /></p>
              </div>
            </div>
          ))}
        </div>
      )}
      <form className="comment-form" onSubmit={onSubmit}>
        <textarea
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Add a comment..."
          rows={2}
        />
        <button className="btn-p" type="submit" disabled={disabled}>Comment</button>
      </form>
    </div>
  );
}

function StarterTemplates({
  templates,
  count,
  controls,
  identity,
  isLiked,
  likeCount,
  deletingId,
  onOpen,
  onComment,
  onLike,
  onEdit,
  onDeleteRequest,
  onDeleteConfirm,
  onDeleteCancel,
}) {
  return (
    <div className="template-board">
      <div className="template-intro">
        <h2>Save your ideas.</h2>
        <p>Because the best ideas never wait for an invitation.</p>
      </div>
      {controls}
      <div className="template-meta">{count} idea{count !== 1 ? "s" : ""}</div>
      <div className="template-grid">
        {templates.map((template, i) => (
          <NoteCard
            key={template.id}
            note={template}
            idx={i}
            isRead
            isOwn={template.authorId === identity?.id}
            isLiked={isLiked(template.id)}
            likeCount={likeCount(template.id)}
            isDeleting={deletingId === template.id}
            onClick={() => onOpen(template)}
            onComment={() => onComment(template)}
            onLike={() => onLike(template.id)}
            onEdit={() => onEdit(template)}
            onDeleteRequest={() => onDeleteRequest(template.id)}
            onDeleteConfirm={onDeleteConfirm}
            onDeleteCancel={onDeleteCancel}
          />
        ))}
      </div>
    </div>
  );
}

// ─── NoteCard ─────────────────────────────────────────────────────────────────
function NoteCard({ note, isRead, isOwn, isLiked, likeCount, isDeleting, onClick, onComment, onLike, onEdit, onDeleteRequest, onDeleteConfirm, onDeleteCancel, idx }) {
  const [hov, setHov] = useState(false);
  const unread = !isRead && !isOwn;
  const comments = note.comments || [];
  const displayTag = note.tag || "Other";

  // ── Delete confirmation overlay ──
  if (isDeleting) {
    return (
      <div style={{
        background: "var(--surface)", border: "1px solid var(--accent)",
        borderRadius: 12, padding: "24px 22px", height: "100%",
        display: "flex", flexDirection: "column", alignItems: "center",
        justifyContent: "center", gap: 14, minHeight: 120,
        boxShadow: "0 18px 54px rgba(0,0,0,0.20)",
        animation: "cardIn 0.15s ease both",
      }}>
        <div style={{ fontFamily: SANS, fontSize: 16, color: "var(--text)", fontWeight: 600, textAlign: "center" }}>
          Delete this idea?
        </div>
        <div style={{ fontFamily: MONO, fontSize: 11, color: "var(--muted)", textAlign: "center", lineHeight: 1.5 }}>
          "{note.title.slice(0, 48)}{note.title.length > 48 ? "…" : ""}"
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn-g" onClick={onDeleteCancel} style={{ padding: "7px 14px", fontSize: 11 }}>Cancel</button>
          <button onClick={onDeleteConfirm} style={{
            padding: "7px 14px", borderRadius: 8, border: "none",
            background: "#ff5c5c", color: "#fff", fontFamily: MONO,
            fontSize: 11, fontWeight: 500, cursor: "pointer",
          }}>Delete</button>
        </div>
      </div>
    );
  }

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        background: "var(--input-bg)",
        border: `1px solid ${unread ? "var(--accent-glow)" : "var(--border)"}`,
        borderRadius: 12, padding: "18px", cursor: "pointer",
        transition: "background 0.16s ease, border-color 0.16s ease, transform 0.16s ease, box-shadow 0.16s ease",
        transform: hov ? "translateY(-1px)" : "none",
        boxShadow: hov ? "0 8px 18px rgba(0,0,0,0.08)"
                       : unread ? "inset 0 0 0 1px var(--accent-glow)" : "none",
        position: "relative", height: "100%",
        display: "flex", flexDirection: "column",
        animation: `cardIn 0.3s ease ${(idx || 0) * 0.04}s both`,
      }}
    >
      {isOwn && (
        <div className={`card-tools${hov ? " show" : ""}`} onClick={e => e.stopPropagation()}>
          <button onClick={onEdit} type="button" title="Edit idea" aria-label="Edit idea">
            <PencilSimple size={14} weight="bold" />
          </button>
          <button onClick={onDeleteRequest} type="button" title="Delete idea" aria-label="Delete idea">
            <X size={14} weight="bold" />
          </button>
        </div>
      )}

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12, marginBottom: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, minWidth: 0 }}>
          {unread && (
            <span style={{
              width: 6, height: 6, borderRadius: "50%",
              background: "var(--accent)", flexShrink: 0,
              boxShadow: "0 0 7px var(--accent-glow)",
            }} />
          )}
          <h3 style={{
            fontFamily: SANS, fontSize: 17, fontWeight: 600,
            lineHeight: 1.28, color: "var(--text)", margin: 0, letterSpacing: "0",
            minWidth: 0, overflowWrap: "anywhere",
          }}>{note.title || "Untitled"}</h3>
        </div>
        <TagPill tag={displayTag} sm />
      </div>

      {note.body && (
        <p style={{
          fontFamily: SANS, fontSize: 13, color: "var(--muted)",
          lineHeight: 1.58, margin: "0 0 14px",
          display: "-webkit-box", WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical", overflow: "hidden",
        }}><Linkify text={note.body} /></p>
      )}

      <AttachmentStrip attachments={note.attachments} />
      <CommentSummary comments={comments} />

      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        {note.isTemplate ? (
          <span className="example-pill" title="Example idea — no author">Example</span>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{
              width: 20, height: 20, borderRadius: "50%",
              background: note.authorColor || "var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 8, fontWeight: 700, color: "#0e0e13",
              fontFamily: MONO, flexShrink: 0,
            }}>{note.author?.charAt(0).toUpperCase()}</div>
            <span style={{ fontFamily: MONO, fontSize: 11, color: "var(--muted)", fontWeight: 500 }}>{note.author}</span>
            <span style={{ fontFamily: MONO, fontSize: 10, color: "var(--dim)" }}>· {ago(note.createdAt)}</span>
          </div>
        )}

        <div className="card-actions" onClick={e => e.stopPropagation()}>
          <button
            className="card-action-btn card-comment-btn"
            onClick={() => onComment?.()}
            title="Comment"
            aria-label="Comment"
            type="button"
          >
            <ChatCircle size={15} />
            <span>{comments.length}</span>
          </button>
          <button
            className={`card-action-btn${isLiked ? " liked" : ""}`}
            onClick={() => onLike()}
            title={isLiked ? "Unlike" : "Like"}
            aria-label={isLiked ? "Unlike" : "Like"}
            type="button"
          >
            <Heart size={15} weight={isLiked ? "fill" : "regular"} />
            <span>{likeCount}</span>
          </button>
        </div>
      </div>
    </div>
  );
}


// ─── Inline link rendering for note bodies / comments ────────────────────────
const LINK_RE = /\[([^\]\n]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s<>()]+[^\s.,!?<>()])/g;
function Linkify({ text }) {
  if (!text) return null;
  const out = [];
  let last = 0, k = 0, m;
  LINK_RE.lastIndex = 0;
  while ((m = LINK_RE.exec(text)) !== null) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const label = m[1] ? m[1] : m[3];
    const href  = m[1] ? m[2] : m[3];
    out.push(
      <a key={`l${k++}`} className="note-link" href={href} target="_blank" rel="noopener noreferrer" onClick={e => e.stopPropagation()}>
        {label}
      </a>
    );
    last = LINK_RE.lastIndex;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

// ─── NewNoteModal (combined — single screen) ──────────────────────────────────
function NewNoteModal({ onClose, onSave, identity, initialNote, mode = "create" }) {
  const [title, setTitle] = useState(initialNote?.title || "");
  const [body,  setBody]  = useState(initialNote?.body || "");
  const [tag,   setTag]   = useState(initialNote?.tag || null);
  const [isPrivate, setIsPrivate] = useState(!!initialNote?.isPrivate);
  const [attachments, setAttachments] = useState(initialNote?.attachments || []);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingMs, setRecordingMs] = useState(0);
  const [liveTranscript, setLiveTranscript] = useState("");
  const [recError, setRecError] = useState("");
  const ref = useRef(null);
  const bodyRef = useRef(null);
  const fileRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const recorderRef = useRef(null);
  const streamRef = useRef(null);
  const chunksRef = useRef([]);
  const timerRef = useRef(null);
  const startedRef = useRef(0);
  const transcriptRef = useRef("");
  const mountedRef = useRef(true);
  const discardRecordingRef = useRef(false);
  useEffect(() => { ref.current?.focus(); }, []);
  useEffect(() => () => {
    mountedRef.current = false;
    clearInterval(timerRef.current);
    try { recorderRef.current?.state === "recording" && recorderRef.current.stop(); } catch {}
    try { streamRef.current?.getTracks().forEach(t => t.stop()); } catch {}
  }, []);
  const canSave = title.trim().length > 0 || body.trim().length > 0 || attachments.length > 0;

  const addFiles = async fileList => {
    const existingCount = attachments.filter(a => a.type === "image").length;
    const files = [...(fileList || [])]
      .filter(f => f && f.type && f.type.startsWith("image/"))
      .slice(0, Math.max(0, 10 - existingCount));
    if (!files.length) return;
    const createdAt = new Date().toISOString();
    const items = await Promise.all(files.map(async (file, i) => {
      const webp = await imageFileToWebp(file);
      return {
        id: gid(), type: "image", mime: webp.mime, size: webp.size,
        width: webp.width, height: webp.height,
        dataUrl: webp.dataUrl,
        name: makeAttachmentName("image", title || body || file.name, existingCount + i + 1, createdAt, webp.mime),
        createdAt, autoNamed: true,
      };
    }));
    setAttachments(p => [...p, ...items]);
  };
  const addImages = async e => {
    await addFiles(e.target.files);
    e.target.value = "";
  };
  const onDragOver = e => {
    if (![...(e.dataTransfer?.types || [])].includes("Files")) return;
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
    setIsDragging(true);
  };
  const onDragLeave = e => {
    if (e.currentTarget.contains(e.relatedTarget)) return;
    setIsDragging(false);
  };
  const onDrop = async e => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer?.files;
    if (files?.length) await addFiles(files);
  };
  const addLink = () => {
    const ta = bodyRef.current;
    if (!ta) return;
    const start = ta.selectionStart ?? body.length;
    const end   = ta.selectionEnd   ?? body.length;
    const selected = body.slice(start, end);
    let url = window.prompt(selected ? `Add link for "${selected.slice(0, 40)}${selected.length > 40 ? "…" : ""}"` : "Paste a URL", "https://");
    if (!url) return;
    url = url.trim();
    if (!/^https?:\/\//i.test(url)) url = "https://" + url.replace(/^\/+/, "");
    let label = selected.trim();
    if (!label) {
      label = window.prompt("Link text (optional)", url) || url;
    }
    const replacement = `[${label}](${url})`;
    const next = body.slice(0, start) + replacement + body.slice(end);
    setBody(next);
    requestAnimationFrame(() => {
      const pos = start + replacement.length;
      try { ta.focus(); ta.setSelectionRange(pos, pos); } catch {}
    });
  };

  const removeAttachment = id => setAttachments(p => p.filter(a => a.id !== id));

  const startTranscript = () => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) return null;
    const rec = new SpeechRecognition();
    rec.continuous = true;
    rec.interimResults = true;
    rec.lang = navigator.language || "en-US";
    rec.onresult = e => {
      let next = "";
      for (let i = 0; i < e.results.length; i++) next += e.results[i][0].transcript;
      next = next.replace(/\s+/g, " ").trim();
      transcriptRef.current = next;
      setLiveTranscript(next);
    };
    rec.onerror = () => {};
    try { rec.start(); } catch {}
    return rec;
  };

  const stopRecording = () => {
    setIsRecording(false);
    clearInterval(timerRef.current);
    timerRef.current = null;
    try { recorderRef.current?.state === "recording" && recorderRef.current.stop(); } catch {}
  };

  const cancelRecording = () => {
    discardRecordingRef.current = true;
    stopRecording();
  };

  const startRecording = async () => {
    setRecError("");
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      setRecError("Voice recording is not available in this browser.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      const recognition = startTranscript();
      chunksRef.current = [];
      transcriptRef.current = "";
      discardRecordingRef.current = false;
      setLiveTranscript("");
      streamRef.current = stream;
      recorderRef.current = recorder;
      startedRef.current = Date.now();
      setRecordingMs(0);
      recorder.ondataavailable = e => { if (e.data?.size) chunksRef.current.push(e.data); };
      recorder.onstop = async () => {
        clearInterval(timerRef.current);
        try { recognition?.stop(); } catch {}
        try { stream.getTracks().forEach(t => t.stop()); } catch {}
        if (discardRecordingRef.current) {
          if (mountedRef.current) setLiveTranscript("");
          return;
        }
        const mime = recorder.mimeType || "audio/webm";
        const blob = new Blob(chunksRef.current, { type: mime });
        if (!blob.size) return;
        const durationMs = Date.now() - startedRef.current;
        const transcript = transcriptRef.current.trim();
        const createdAt = new Date().toISOString();
        const dataUrl = await blobToDataUrl(blob);
        if (!mountedRef.current) return;
        setAttachments(p => {
          const idx = p.filter(a => a.type === "voice").length + 1;
          return [...p, {
            id: gid(), type: "voice", mime, size: blob.size, dataUrl,
            durationMs, transcript, createdAt, autoNamed: true,
            name: makeAttachmentName("voice", transcript || title || body || "voice message", idx, createdAt, mime),
          }];
        });
        if (transcript) {
          setBody(p => p.trim() ? p : transcript);
          setTitle(p => p.trim() ? p : titleFromText(transcript));
        }
      };
      recorder.start(250);
      timerRef.current = setInterval(() => setRecordingMs(Date.now() - startedRef.current), 250);
      setIsRecording(true);
    } catch (err) {
      setRecError(err?.message || "Could not start the microphone.");
      try { streamRef.current?.getTracks().forEach(t => t.stop()); } catch {}
    }
  };
  const isEditing = mode === "edit";
  const save = () => canSave && onSave({
    ...initialNote,
    title: title.trim() || "Untitled",
    body: body.trim(),
    tag: tag || "Other",
    attachments,
    isPrivate,
  });

  return (
    <div className="m-overlay" onClick={onClose}>
      <div className="m-box" onClick={e => e.stopPropagation()} style={{ maxWidth: 520 }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <span style={{ fontFamily: SANS, fontSize: 14, fontWeight: 500, color: "var(--muted)" }}>
            {isEditing ? "Edit idea" : "New idea"}
          </span>
          <button onClick={onClose} className="close-btn" aria-label="Close">
            <X size={16} weight="bold" />
          </button>
        </div>

        {/* Tag selector */}
        <div className="idea-tags">
          {TAGS.map(t => {
            const c = TAG_C[t]; const sel = tag === t;
            return (
              <button
                key={t}
                className={`idea-tag${sel ? " on" : ""}`}
                onClick={() => setTag(sel ? null : t)}
                style={sel ? { background: c.bg, color: c.text, borderColor: c.bd } : {}}
                type="button"
              >
                {t}
              </button>
            );
          })}
        </div>

        {/* Title */}
        <input
          ref={ref} className="m-in" placeholder="What's the idea?"
          value={title} onChange={e => setTitle(e.target.value)}
          onKeyDown={e => { if (e.key === "Enter" && e.metaKey && canSave) save(); }}
          style={{ fontFamily: SANS, fontSize: 20, fontWeight: 600 }}
        />

        {/* Body */}
        <textarea
          ref={bodyRef}
          className="m-ta" rows={4}
          placeholder="Describe it… optional, but future-you will thank present-you"
          value={body} onChange={e => setBody(e.target.value)}
        />

        {/* Attachments */}
        <div
          className={`att-box${isDragging ? " is-dragging" : ""}`}
          onDragOver={onDragOver}
          onDragEnter={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
        >
          <input ref={fileRef} type="file" accept="image/*" multiple onChange={addImages} style={{ display: "none" }} />
          <div className="att-actions">
            <button className="attach-plus" onClick={() => fileRef.current?.click()} type="button" aria-label="Add image" title="Add image (or drag & drop)">
              <ImageSquare size={20} weight="bold" />
              <span>Add image</span>
            </button>
            <button className="attach-link" onClick={addLink} type="button" aria-label="Add link" title="Add link to selection">
              <LinkSimple size={18} weight="bold" />
              <span>Add link</span>
            </button>
            {!isRecording ? (
              <button className="voice-trigger" onClick={startRecording} type="button" aria-label="Record voice message" title="Record voice message">
                <Microphone size={20} weight="bold" />
              </button>
            ) : (
              <div className="voice-recorder" role="status" aria-label={`Recording voice message ${fmtDur(recordingMs)}`}>
                <button className="voice-cancel" onClick={cancelRecording} type="button" aria-label="Cancel recording">
                  <X size={16} weight="bold" />
                </button>
                <div className="voice-wave" aria-hidden="true">
                  {[0,1,2,3,4,5,6,7,8].map(i => <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />)}
                </div>
                <span className="voice-time">{fmtDur(recordingMs)}</span>
                <button className="voice-finish" onClick={stopRecording} type="button" aria-label="Save voice message">
                  <Check size={16} weight="bold" />
                </button>
              </div>
            )}
          </div>
          <div className="att-drop-hint" aria-hidden="true">Drop images to attach</div>
          {(liveTranscript || recError || attachments.length > 0) && (
            <div className="att-workspace">
              {liveTranscript && <p className="att-transcript">{liveTranscript}</p>}
              {recError && <p className="att-error">{recError}</p>}
              {attachments.length > 0 && (
                <div className="att-list">
                  {attachments.map(a => (
                    <div className="att-row" key={a.id} style={a.type === "voice" ? { gridTemplateColumns: "130px minmax(0,1fr) 24px" } : {}}>
                      {a.type === "image" ? <img src={a.dataUrl} alt={a.name} /> : <audio controls src={a.dataUrl} />}
                      <div className="att-row-meta">
                        <span>{a.name}</span>
                        <span>{a.type === "voice" ? `${fmtDur(a.durationMs)}${a.transcript ? " · transcript saved" : ""}` : fmtSize(a.size)}</span>
                      </div>
                      <button className="att-remove" onClick={() => removeAttachment(a.id)} type="button" aria-label="Remove attachment">
                        <X size={14} weight="bold" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="idea-footer">
          <label className="private-check">
            <input
              type="radio"
              checked={isPrivate}
              onClick={() => setIsPrivate(v => !v)}
              readOnly
            />
            <span>Save as private</span>
          </label>
          <button className="btn-p" disabled={!canSave || isRecording} onClick={save}>
            {isEditing ? "Save changes" : "Share"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Idea detail page + comments ──────────────────────────────────────────────
function IdeaDetailPage({ note, isOwn, isLiked, likeCount, onBack, onLike, onAddComment, onEdit, onDeleteRequest }) {
  const [comment, setComment] = useState("");
  const submitComment = e => {
    e.preventDefault();
    const body = comment.trim();
    if (!body) return;
    onAddComment(body);
    setComment("");
  };
  return (
    <main className="idea-page">
      <div className="idea-page-head">
        <button className="back-btn" onClick={onBack} type="button">
          <ArrowLeft size={18} />
          <span>Back</span>
        </button>
        <div className="detail-actions">
          {isOwn && (
            <>
              <button onClick={onEdit} className="close-btn" aria-label="Edit idea" title="Edit idea">
                <PencilSimple size={16} weight="bold" />
              </button>
              <button onClick={onDeleteRequest} className="close-btn danger" aria-label="Delete idea" title="Delete idea">
                <X size={16} weight="bold" />
              </button>
            </>
          )}
        </div>
      </div>
      <article className="idea-page-card">
        <div className="idea-page-topline">
          <h1>{note.title || "Untitled"}</h1>
          <TagPill tag={note.tag || "Other"} sm />
        </div>
        {note.body && <p className="idea-page-body"><Linkify text={note.body} /></p>}
        <AttachmentDetailList attachments={note.attachments} />
        <div className="idea-page-meta">
          {note.isTemplate ? (
            <span className="example-pill" title="Example idea — no author">Example idea</span>
          ) : (
            <div className="idea-page-author">
              <UserAvatar name={note.author} color={note.authorColor} size={34} />
              <div>
                <div>{note.author}</div>
                <span>{fd(note.createdAt)} at {ft(note.createdAt)}</span>
              </div>
            </div>
          )}
          <button
            onClick={onLike}
            className={`detail-like${isLiked ? " liked" : ""}`}
            type="button"
          >
            <Heart size={15} weight={isLiked ? "fill" : "regular"} />
            <span>{likeCount}</span>
          </button>
        </div>
        <CommentsPanel
          comments={note.comments}
          value={comment}
          onChange={setComment}
          onSubmit={submitComment}
          disabled={!comment.trim()}
        />
      </article>
    </main>
  );
}

function CommentDialog({ note, onClose, onAddComment }) {
  const [comment, setComment] = useState("");
  const submitComment = e => {
    e.preventDefault();
    const body = comment.trim();
    if (!body) return;
    onAddComment(body);
    setComment("");
  };
  return (
    <div className="m-overlay" onClick={onClose}>
      <div className="m-box comment-dialog" onClick={e => e.stopPropagation()}>
        <div className="dialog-head">
          <div>
            <span className="dialog-kicker">Comments</span>
            <h2>{note.title || "Untitled"}</h2>
          </div>
          <button onClick={onClose} className="close-btn" aria-label="Close">
            <X size={16} weight="bold" />
          </button>
        </div>
        <CommentsPanel
          comments={note.comments}
          value={comment}
          onChange={setComment}
          onSubmit={submitComment}
          disabled={!comment.trim()}
        />
      </div>
    </div>
  );
}

// ─── Notification Banner ──────────────────────────────────────────────────────
function NotifBanner({ onDismiss, onEnable }) {
  return (
    <div style={{
      background: "var(--accent-bg)", border: "1px solid var(--accent-glow)",
      borderRadius: 12, padding: "12px 16px", marginBottom: 18,
      display: "flex", alignItems: "center", gap: 12, animation: "cardIn 0.3s ease both",
    }}>
      <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: SANS, fontSize: 14, fontWeight: 600, color: "var(--text)", marginBottom: 2 }}>
          Get notified when teammates post ideas
        </div>
        <div style={{ fontFamily: SANS, fontSize: 13, color: "var(--muted)" }}>
          Enable browser notifications to catch new ideas even when the tab is in the background.
        </div>
      </div>
      <button className="btn-p" onClick={onEnable} style={{ flexShrink: 0, fontSize: 11, padding: "7px 14px" }}>Enable</button>
      <button onClick={onDismiss} style={{ background: "none", border: "none", color: "var(--muted)", cursor: "pointer", padding: 0, flexShrink: 0 }} aria-label="Dismiss">
        <X size={16} weight="bold" />
      </button>
    </div>
  );
}

function LoginModal({ onLogin, mode = "signin", onBack }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  useEffect(() => { inputRef.current?.focus(); }, []);
  const isAdding = mode === "add";
  const submit = e => {
    e?.preventDefault();
    const clean = normalizeEmail(email);
    if (!isAltyEmail(clean)) {
      setError("Enter an @alty.co email.");
      return;
    }
    setError("");
    onLogin(makeTeamIdentity(clean));
  };
  return (
    <div className="m-overlay">
      <form className="m-box login-box" onSubmit={submit}>
        <div className="login-head">
          {isAdding && (
            <button className="login-back" onClick={onBack} type="button" aria-label="Back">
              <ArrowLeft size={17} />
            </button>
          )}
          <div className="login-brand">
            <span className="login-mark">bb</span>
            <span className="login-title">BrandBoard</span>
          </div>
        </div>
        <div className="login-copy">
          <strong>{isAdding ? "Add another account" : "Sign in to your board"}</strong>
          <span>{isAdding ? "Sign in with another Alty email, then choose the active account from the profile menu." : "Collect the useful signal while it is still fresh."}</span>
        </div>
        <input
          ref={inputRef}
          className="m-in login-input"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="name@alty.co"
          value={email}
          onChange={e => { setEmail(e.target.value); setError(""); }}
        />
        {error && <p className="login-error">{error}</p>}
        <button className="btn-p login-submit" type="submit">Sign In</button>
      </form>
    </div>
  );
}

function AccountMenu({ identity, accounts, onAdd, onSwitch, onSignOut }) {
  const hasMultiple = accounts.length > 1;
  return (
    <div className="account-menu" onClick={e => e.stopPropagation()}>
      {hasMultiple && (
        <div className="account-list">
          {accounts.map(account => {
            const active = account.id === identity.id;
            return (
              <button
                className={`account-row${active ? " current" : ""}`}
                key={account.id}
                onClick={() => onSwitch(account)}
                type="button"
              >
                <span className="account-avatar" style={{ background: account.color }}>
                  {account.name.charAt(0).toUpperCase()}
                </span>
                <span className="account-copy">
                  <strong>{account.name}</strong>
                  <span>{account.email}</span>
                </span>
                {active ? <CheckCircle className="account-check" size={19} weight="fill" /> : <Circle className="account-check" size={19} />}
              </button>
            );
          })}
        </div>
      )}
      <button className="account-action" type="button" onClick={onAdd}>
        <UserPlus size={16} />
        Add another account
      </button>
      {hasMultiple && (
        <button className="account-action muted" type="button" onClick={onSignOut}>
          <SignOut size={16} />
          Sign out of this account
        </button>
      )}
    </div>
  );
}

function DatePickerDialog({ selectedDate, month, onMonthChange, onSelect, onClear, onClose }) {
  const days = monthDays(month);
  const today = ymd(new Date());
  return (
    <div className="date-picker-layer" onClick={onClose}>
      <div className="date-scrim" />
      <div className="date-popover" onClick={e => e.stopPropagation()}>
        <div className="date-head">
          <strong>{monthLabel(month)}</strong>
          <div className="date-nav">
            <button type="button" onClick={() => onMonthChange(addMonths(month, -1))} aria-label="Previous month">
              <CaretLeft size={16} weight="bold" />
            </button>
            <button type="button" onClick={() => onMonthChange(addMonths(month, 1))} aria-label="Next month">
              <CaretRight size={16} weight="bold" />
            </button>
          </div>
        </div>
        <div className="date-weekdays">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => <span key={`${day}-${i}`}>{day}</span>)}
        </div>
        <div className="date-grid">
          {days.map(day => {
            const value = ymd(day);
            const selected = value === selectedDate;
            const muted = !sameMonth(day, month);
            return (
              <button
                key={value}
                className={`date-day${selected ? " selected" : ""}${muted ? " muted" : ""}${value === today ? " today" : ""}`}
                onClick={() => onSelect(value)}
                type="button"
              >
                {day.getDate()}
              </button>
            );
          })}
        </div>
        <div className="date-actions">
          <button type="button" onClick={onClear}>Clear</button>
          <button type="button" onClick={() => onSelect(today)}>Today</button>
        </div>
      </div>
    </div>
  );
}

// ─── CSS ──────────────────────────────────────────────────────────────────────
const CSS = `
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Regular.otf') format('opentype');
  font-weight:400;
  font-style:normal;
}
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Medium.otf') format('opentype');
  font-weight:500;
  font-style:normal;
}
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Bold.otf') format('opentype');
  font-weight:700;
  font-style:normal;
}
@font-face {
  font-family:'Aeonic Pro';
  src:url('fonts/AeonikPro-Light.otf') format('opentype');
  font-weight:300;
  font-style:normal;
}
*, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
:root {
  --bg:#0e0e13; --surface:#151519; --sh:#1a1a1f; --border:rgba(255,255,255,0.15);
  --text:rgba(255,255,255,0.96); --muted:rgba(255,255,255,0.64); --dim:rgba(255,255,255,0.38);
  --accent:#ff461e; --accent-bg:rgba(255,70,30,0.13); --accent-glow:rgba(255,70,30,0.28);
  --input-bg:#111116; --modal-bg:rgba(14,14,19,0.74);
}
html { background:var(--bg); }
body {
  background:var(--bg); color:var(--text); min-height:100vh;
  font-family:'Aeonic Pro','Aeonik Pro',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
  font-size:15px; line-height:1.55;
}
button, input, textarea, select { font:inherit; }
button { -webkit-tap-highlight-color:transparent; }
@keyframes cardIn  { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none} }
@keyframes slideUp { from{opacity:0;transform:translateY(18px)} to{opacity:1;transform:none} }

.app { max-width:1120px; margin:0 auto; padding:0 24px 120px; }

.hdr {
  display:flex; align-items:center; justify-content:space-between;
  padding:18px 0 16px; border-bottom:1px solid var(--border); margin-bottom:18px;
  position:sticky; top:0; z-index:50; background:var(--bg);
}
.hdr-l { display:flex; align-items:center; gap:12px; min-width:0; }
.hdr-r { display:flex; align-items:center; gap:8px; }
.logo  { display:flex; align-items:center; gap:10px; min-width:0; }
.logo-ico {
  width:30px; height:30px; border-radius:8px; background:var(--accent);
  color:#fff; display:flex; align-items:center; justify-content:center;
  font-size:10px; font-weight:700; letter-spacing:0;
}
.logo-txt {
  display:block; font-size:15px; font-weight:600; line-height:1.1;
  letter-spacing:0; color:var(--text);
}
.logo-sub {
  display:block; font-size:11px; color:var(--dim);
  letter-spacing:0; margin-top:3px;
}

.icon-btn {
  background:var(--input-bg); border:1px solid var(--border); color:var(--muted);
  width:34px; height:34px; border-radius:8px; cursor:pointer;
  display:flex; align-items:center; justify-content:center;
  font-size:13px; transition:all 0.15s; position:relative;
}
.icon-btn:hover { border-color:var(--accent-glow); color:var(--text); background:var(--sh); }
.icon-btn.on    { border-color:var(--accent); color:var(--accent); background:var(--accent-bg); }

.ndot {
  position:absolute; top:-5px; right:-5px;
  background:var(--accent); color:#fff;
  min-width:16px; height:16px; padding:0 4px; border-radius:999px;
  font-size:9px; font-weight:500; display:flex; align-items:center; justify-content:center;
}

.av {
  width:34px; height:34px; border-radius:50%;
  border:1px solid var(--border); font-size:12px; font-weight:700;
  color:#0e0e13; cursor:pointer; padding:0;
  display:flex; align-items:center; justify-content:center;
}

.filters {
  display:block;
  border:0; background:transparent;
  padding:0 0 12px; margin-bottom:18px;
}
.sw {
  display:flex; align-items:center; gap:10px; min-width:0;
  background:transparent; border:0; border-bottom:1px solid var(--border);
  border-radius:0; padding:0; min-height:40px; position:relative;
  transition:border-color 0.15s;
}
.sw:focus-within { border-color:var(--accent); }
.s-ico { font-size:14px; color:var(--dim); flex-shrink:0; }
.s-in  {
  flex:1; min-width:0; background:none; border:none; outline:none;
  padding:10px 0; font-size:14px; color:var(--text); caret-color:var(--accent);
}
.s-in::placeholder { color:var(--dim); }
.clr-btn {
  width:22px; height:22px; border-radius:6px; background:transparent; border:none;
  color:var(--muted); cursor:pointer; font-size:18px; display:flex; align-items:center; justify-content:center;
}
.clr-btn:hover { color:var(--text); background:var(--sh); }
.date-trigger {
  width:30px; height:30px; border:0; border-radius:8px; background:transparent;
  color:var(--muted); cursor:pointer; display:flex; align-items:center; justify-content:center;
}
.date-trigger:hover,
.date-trigger.on { color:var(--accent); background:transparent; }
.feed-controls {
  border:0; background:transparent;
  padding:8px 0 18px; margin:0 0 10px;
  display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:start; gap:18px;
}
.mfs  { display:flex; align-items:center; justify-content:flex-end; gap:10px; flex-shrink:0; }
.tcs  { display:flex; align-items:center; gap:6px; flex-wrap:wrap; justify-content:flex-start; min-width:0; }

.chip {
  min-height:30px; padding:5px 10px; border-radius:999px; border:1px solid var(--border);
  background:transparent; color:var(--muted);
  font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s; letter-spacing:0;
}
.chip:hover { border-color:var(--muted); color:var(--text); background:var(--input-bg); }
.chip.on    { background:var(--accent-bg); border-color:var(--accent); color:var(--accent); }

.feed-filter-wrap { position:relative; width:max-content; min-width:188px; justify-self:end; }
.feed-filter-trigger {
  width:100%; min-height:36px; border:0; border-bottom:1px solid var(--border);
  background:transparent; color:var(--muted); cursor:pointer;
  display:flex; align-items:center; justify-content:space-between; gap:14px;
  padding:5px 0; font-size:13px; font-weight:500; transition:all 0.15s;
}
.feed-filter-trigger:hover,
.feed-filter-trigger.open { color:var(--text); border-color:var(--accent); }
.feed-filter-trigger svg { transition:transform 0.15s; }
.feed-filter-trigger.open svg { transform:rotate(180deg); }
.feed-filter-menu {
  position:absolute; top:calc(100% + 8px); right:0; width:max-content; min-width:100%; z-index:85;
  background:var(--surface); border:1px solid var(--border); border-radius:12px;
  padding:6px; box-shadow:0 18px 50px rgba(0,0,0,0.18);
  animation:slideUp 0.16s ease;
}
.feed-filter-menu button {
  width:100%; border:0; border-radius:8px; background:transparent;
  color:var(--muted); text-align:left; padding:9px 9px;
  display:flex; align-items:center; gap:8px; cursor:pointer;
  font-size:13px; font-weight:500;
}
.feed-filter-menu button svg { opacity:0; color:var(--accent); flex-shrink:0; }
.feed-filter-menu button.selected { color:var(--text); }
.feed-filter-menu button.selected svg { opacity:1; }
.feed-filter-menu button:not(.selected) { padding-left:32px; }
.feed-filter-menu button:not(.selected) svg { display:none; }
.feed-filter-menu button:hover { background:var(--input-bg); color:var(--text); }

.date-picker-layer {
  position:absolute; top:calc(100% + 10px); right:0; z-index:120;
}
.date-scrim { display:none; }
.date-popover {
  width:294px; background:var(--surface); border:1px solid var(--border);
  border-radius:14px; padding:14px; box-shadow:0 22px 58px rgba(0,0,0,0.22);
  animation:slideUp 0.18s ease;
}
.date-head {
  display:flex; align-items:center; justify-content:space-between; gap:12px; margin-bottom:14px;
}
.date-head strong { font-size:14px; font-weight:600; color:var(--text); }
.date-nav { display:flex; align-items:center; gap:6px; }
.date-nav button {
  width:30px; height:30px; border-radius:8px; border:1px solid var(--border);
  background:transparent; color:var(--muted); cursor:pointer;
  display:flex; align-items:center; justify-content:center;
}
.date-nav button:hover { color:var(--text); border-color:var(--muted); }
.date-weekdays,
.date-grid { display:grid; grid-template-columns:repeat(7,1fr); gap:4px; }
.date-weekdays { margin-bottom:5px; }
.date-weekdays span {
  height:26px; display:flex; align-items:center; justify-content:center;
  color:var(--dim); font-size:11px; font-weight:500;
}
.date-day {
  height:34px; border:1px solid transparent; border-radius:10px;
  background:transparent; color:var(--text); cursor:pointer;
  font-size:13px; font-weight:500; transition:all 0.15s;
}
.date-day:hover { background:var(--surface); border-color:var(--border); }
.date-day.muted { color:var(--dim); }
.date-day.today { border-color:var(--accent-glow); color:var(--accent); }
.date-day.selected {
  background:var(--accent); border-color:var(--accent); color:#fff;
}
.date-actions {
  display:flex; align-items:center; justify-content:space-between; margin-top:14px;
  border-top:1px solid var(--border); padding-top:12px;
}
.date-actions button {
  border:0; background:transparent; color:var(--accent); cursor:pointer;
  font-size:13px; font-weight:500; padding:5px 0;
}

.meta  { display:flex; align-items:center; gap:10px; margin:0 0 14px; min-height:26px; flex-wrap:wrap; }
.ct    { font-size:13px; color:var(--dim); }
.ur-btn {
  padding:4px 9px; border-radius:999px; background:var(--accent-bg);
  color:var(--accent); font-size:12px;
  font-weight:500; border:1px solid var(--accent-glow); cursor:pointer; transition:opacity 0.15s;
}
.ur-btn:hover { opacity:0.8; }
.liked-meta {
  display:inline-flex; align-items:center; gap:5px;
  font-size:12px; color:var(--accent);
}
.user-avatar {
  border-radius:8px; color:#0e0e13; display:inline-flex; align-items:center; justify-content:center;
  font-weight:700; flex-shrink:0; border:1px solid color-mix(in srgb,var(--border) 68%,transparent);
}
.card-tools {
  position:absolute; top:10px; right:10px; z-index:3;
  display:flex; align-items:center; gap:5px;
  opacity:0; transform:translateY(-2px); transition:all 0.14s;
}
.card-tools.show,
.card-tools:focus-within { opacity:1; transform:none; }
.card-tools button {
  width:27px; height:27px; border-radius:8px; border:1px solid var(--border);
  background:var(--input-bg); color:var(--muted); cursor:pointer;
  display:flex; align-items:center; justify-content:center; transition:all 0.14s;
}
.card-tools button:hover { border-color:var(--muted); color:var(--text); }
.card-tools button:last-child:hover { border-color:#ff5c5c; color:#ff5c5c; }
.card-actions {
  display:flex; align-items:center; gap:8px; flex-shrink:0;
}
.card-action-btn {
  background:transparent; border:0; color:var(--dim); cursor:pointer;
  display:inline-flex; align-items:center; gap:4px; padding:4px 2px;
  font-size:12px; line-height:1; border-radius:8px; transition:color 0.14s, transform 0.14s, background 0.14s;
}
.card-action-btn:hover { color:var(--accent); transform:translateY(-1px); }
.card-action-btn.liked { color:var(--accent); }
.card-action-btn span { font-size:11px; color:currentColor; }
.comment-summary {
  display:flex; align-items:center; gap:8px; margin:4px 0 14px; min-width:0;
}
.comment-avatars { display:flex; align-items:center; flex-shrink:0; }
.comment-avatars .user-avatar { margin-right:-6px; box-shadow:0 0 0 2px var(--surface); }
.comment-count {
  color:#0b66b3; font-size:13px; font-weight:600; white-space:nowrap;
}
.comment-last {
  color:var(--muted); font-size:12px; min-width:0; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.detail-actions {
  display:flex; align-items:center; gap:7px; margin-left:8px; flex-shrink:0;
}
.close-btn.danger:hover { color:#ff5c5c; border-color:#ff5c5c; }
.idea-page {
  max-width:760px; margin:0 auto; padding:8px 0 60px;
}
.idea-page-head {
  display:flex; align-items:center; justify-content:space-between; gap:12px;
  margin:0 0 14px;
}
.back-btn {
  border:0; background:transparent; color:var(--muted); cursor:pointer;
  display:inline-flex; align-items:center; gap:8px; padding:8px 0;
  font-size:14px; font-weight:500;
}
.back-btn:hover { color:var(--text); }
.idea-page-card {
  background:var(--surface); border:1px solid var(--border); border-radius:14px;
  padding:26px; box-shadow:none;
}
.idea-page-topline {
  display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:16px;
}
.idea-page-topline h1 {
  font-size:28px; line-height:1.16; font-weight:600; color:var(--text); margin:0; letter-spacing:0;
}
.idea-page-body {
  color:var(--muted); font-size:16px; line-height:1.65; margin:0 0 22px; white-space:pre-wrap;
}
.idea-page-meta {
  display:flex; align-items:center; justify-content:space-between; gap:16px;
  padding-top:18px; border-top:1px solid var(--border);
}
.idea-page-author {
  display:flex; align-items:center; gap:10px; min-width:0;
}
.idea-page-author div div {
  font-size:13px; font-weight:600; color:var(--text);
}
.idea-page-author span {
  display:block; color:var(--muted); font-size:12px; margin-top:2px;
}
.detail-like {
  background:transparent; border:1px solid var(--border); border-radius:999px; cursor:pointer;
  padding:8px 13px; display:inline-flex; align-items:center; gap:6px;
  color:var(--muted); font-size:13px; transition:all 0.15s;
}
.detail-like:hover,
.detail-like.liked { border-color:var(--accent-glow); color:var(--accent); background:var(--accent-bg); }
.detail-like span { font-size:12px; color:currentColor; }
.comments-panel {
  margin-top:22px; padding-top:18px; border-top:1px solid var(--border);
}
.comments-head {
  display:flex; align-items:center; gap:7px; color:var(--muted);
  font-size:13px; font-weight:600; margin-bottom:14px;
}
.comment-list { display:flex; flex-direction:column; gap:14px; margin-bottom:14px; }
.comment-item { display:grid; grid-template-columns:30px minmax(0,1fr); gap:10px; align-items:start; }
.comment-body {
  background:transparent; border:0; border-bottom:1px solid var(--border); border-radius:0;
  padding:0 0 10px; min-width:0;
}
.comment-meta { display:flex; align-items:center; gap:8px; margin-bottom:4px; min-width:0; }
.comment-meta strong {
  color:var(--text); font-size:12px; font-weight:600; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.comment-meta span { color:var(--dim); font-size:11px; white-space:nowrap; }
.comment-body p { color:var(--muted); font-size:13px; line-height:1.5; white-space:pre-wrap; }
.comment-form { display:grid; grid-template-columns:minmax(0,1fr) auto; gap:10px; align-items:end; }
.comment-form textarea {
  width:100%; min-height:46px; resize:vertical; border-radius:0;
  border:0; border-bottom:1px solid var(--border); background:transparent; color:var(--text);
  padding:10px 0; outline:none; line-height:1.45; caret-color:var(--accent);
}
.comment-form textarea:focus { border-color:var(--accent); background:transparent; }
.comment-form textarea::placeholder { color:var(--dim); }

.grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px; grid-auto-rows:1fr; align-items:stretch; }
@media (max-width:980px) { .grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:640px) { .grid { grid-template-columns:1fr; } }

.empty {
  text-align:left; padding:24px; border:1px solid var(--border);
  border-radius:12px; background:var(--surface);
}
.empty-ttl { font-size:18px; font-weight:500; color:var(--text); margin-bottom:6px; }
.empty-bd  { font-size:13px; color:var(--muted); line-height:1.65; max-width:360px; }
.template-board {
  border:0; border-radius:0;
  background:transparent; padding:22px 0 0;
}
.template-intro { margin-bottom:14px; }
.template-intro h2 { font-size:18px; line-height:1.2; font-weight:500; color:var(--text); margin-bottom:4px; }
.template-intro p { font-size:13px; color:var(--muted); }
.template-meta { font-size:13px; color:var(--dim); margin:0 0 14px; }
.template-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:14px; grid-auto-rows:1fr; align-items:stretch; }
.template-card {
  min-height:170px; text-align:left; display:flex; flex-direction:column; align-items:flex-start; gap:11px;
  border:1px solid var(--border); border-radius:10px; background:var(--input-bg);
  color:var(--text); padding:14px; cursor:pointer; transition:all 0.15s;
}
.template-card:hover { border-color:var(--accent-glow); background:var(--sh); transform:translateY(-1px); }
.template-card strong { font-size:16px; line-height:1.25; font-weight:500; }
.template-card span:last-child { font-size:13px; line-height:1.45; color:var(--muted); }

.fab {
  position:fixed; bottom:28px; right:28px;
  background:var(--accent); color:#fff; border:none;
  border-radius:999px; padding:12px 18px;
  display:flex; align-items:center; gap:8px;
  font-size:13px; font-weight:500;
  cursor:pointer;
  transition:all 0.2s; letter-spacing:0.01em; z-index:40;
}
.fab:hover { transform:translateY(-1px); filter:brightness(1.04); }

.m-overlay {
  position:fixed; inset:0; background:var(--modal-bg);
  display:flex; align-items:center; justify-content:center;
  z-index:200; padding:24px; backdrop-filter:blur(12px);
}
.m-box {
  background:var(--surface);
  border:1px solid color-mix(in srgb,var(--border) 86%,transparent);
  border-radius:16px; padding:26px; width:100%;
  box-shadow:0 34px 90px rgba(0,0,0,0.22);
  animation:slideUp 0.22s ease; max-height:90vh; overflow-y:auto;
}
.comment-dialog { max-width:560px; }
.dialog-head {
  display:flex; align-items:flex-start; justify-content:space-between; gap:16px; margin-bottom:4px;
}
.dialog-head h2 {
  font-size:20px; line-height:1.25; font-weight:600; color:var(--text); margin:4px 0 0; letter-spacing:0;
}
.dialog-kicker {
  color:var(--muted); font-size:13px; font-weight:500;
}

.m-in {
  width:100%; background:transparent; border:0; border-bottom:1px solid var(--border);
  border-radius:0; padding:13px 0; color:var(--text);
  outline:none; transition:border-color 0.15s, background 0.15s; margin-bottom:10px; caret-color:var(--accent);
}
.m-in:focus { border-color:var(--accent); background:transparent; }
.m-in::placeholder { color:var(--dim); font-weight:400; }

.m-ta {
  width:100%; background:transparent; border:0; border-bottom:1px solid var(--border);
  border-radius:0; padding:12px 0; color:var(--text);
  font-size:14px; outline:none; resize:none;
  transition:border-color 0.15s, background 0.15s; margin-bottom:16px; line-height:1.62; caret-color:var(--accent);
}
.m-ta:focus { border-color:var(--accent); background:transparent; }
.m-ta::placeholder { color:var(--dim); }

.att-strip {
  display:flex; flex-direction:column; align-items:stretch; gap:8px; margin:0 0 14px;
  overflow:hidden;
}
.img-collage {
  width:100%; display:grid; gap:2px; overflow:hidden;
  border:1px solid var(--border); border-radius:12px;
  background:var(--border); aspect-ratio:16/9; min-height:150px;
}
.img-collage.detail { min-height:260px; max-height:520px; }
.img-collage.count-1 { grid-template-columns:1fr; }
.img-collage.count-2 { grid-template-columns:repeat(2,1fr); }
.img-collage.count-3,
.img-collage.count-4 { grid-template-columns:1.15fr 1fr; grid-template-rows:repeat(2,1fr); }
.img-collage.count-5 { grid-template-columns:1.2fr 1fr 1fr; grid-template-rows:repeat(2,1fr); }
.img-collage.count-3 .img-cell:first-child,
.img-collage.count-4 .img-cell:first-child,
.img-collage.count-5 .img-cell:first-child { grid-row:span 2; }
.img-collage.count-4 .img-cell:nth-child(4) { grid-column:2; }
.img-collage.count-5 .img-cell:nth-child(2) { grid-column:2; }
.img-collage.count-5 .img-cell:nth-child(3) { grid-column:3; }
.img-collage.count-5 .img-cell:nth-child(4) { grid-column:2; grid-row:2; }
.img-collage.count-5 .img-cell:nth-child(5) { grid-column:3; grid-row:2; }
.img-cell { min-width:0; min-height:0; position:relative; background:var(--sh); }
.img-cell img { width:100%; height:100%; object-fit:cover; display:block; }
.img-extra {
  position:absolute; inset:0; background:rgba(0,0,0,0.46); color:#fff;
  display:flex; align-items:center; justify-content:center;
  font-size:24px; font-weight:600;
}
.att-pill {
  min-height:28px; display:inline-flex; align-items:center; justify-content:center; align-self:flex-start;
  gap:5px; padding:0 9px; border-radius:999px; border:1px solid var(--border);
  background:var(--input-bg); color:var(--muted);
  font-size:11px; font-weight:500;
  white-space:nowrap;
}
.att-box { margin-bottom:18px; }
.att-actions { display:flex; align-items:center; justify-content:space-between; gap:12px; min-height:44px; }
.attach-plus,
.voice-trigger {
  height:42px; border-radius:999px; flex-shrink:0;
  border:1px solid var(--border); background:var(--input-bg); color:var(--muted);
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  transition:all 0.16s ease; font-weight:500;
}
.attach-plus { width:auto; gap:8px; padding:0 14px; font-size:13px; }
.attach-plus span { line-height:1; }
.voice-trigger { width:42px; margin-left:auto; border-radius:50%; }
.attach-plus:hover,
.voice-trigger:hover {
  border-color:var(--accent); color:var(--accent); background:var(--accent-bg);
  transform:translateY(-1px);
}
.voice-recorder {
  flex:1; max-width:320px; min-width:220px; height:44px; border-radius:999px;
  border:1px solid var(--accent-glow); background:var(--accent-bg);
  display:flex; align-items:center; gap:9px; padding:4px 5px 4px 6px;
}
.voice-cancel,
.voice-finish {
  width:34px; height:34px; border-radius:50%; border:none; flex-shrink:0;
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  font-size:17px; font-weight:500;
}
.voice-cancel { background:var(--input-bg); color:var(--muted); }
.voice-cancel:hover { color:#ff5c5c; }
.voice-finish { background:var(--accent); color:#fff; }
.voice-finish:hover { filter:brightness(1.08); }
.voice-wave {
  flex:1; display:flex; align-items:center; justify-content:center; gap:4px;
  min-width:72px; height:28px;
}
.voice-wave span {
  width:3px; height:10px; border-radius:4px; background:var(--accent);
  animation:voicePulse 0.82s ease-in-out infinite alternate;
}
.voice-wave span:nth-child(2n) { height:17px; }
.voice-wave span:nth-child(3n) { height:22px; }
.voice-time {
  color:var(--accent); font-size:11px; font-weight:500;
  min-width:34px; text-align:right;
}
.att-workspace {
  margin-top:10px; border:0; border-top:1px solid var(--border); border-radius:0;
  background:transparent; padding:10px 0 0;
}
@keyframes voicePulse { from{transform:scaleY(0.55); opacity:0.55} to{transform:scaleY(1); opacity:1} }
.att-transcript {
  color:var(--muted); font-size:12px;
  line-height:1.7; white-space:pre-wrap; margin:0;
}
.att-error {
  color:#ff5c5c; font-size:11px;
  line-height:1.6; margin:0;
}
.att-list { display:flex; flex-direction:column; gap:8px; margin-top:10px; }
.att-row {
  display:grid; grid-template-columns:58px minmax(0,1fr) 24px; align-items:center;
  gap:9px; min-height:44px;
}
.att-row img {
  width:58px; height:44px; object-fit:cover; border-radius:6px;
  border:1px solid var(--border);
}
.att-row audio { width:130px; height:32px; }
.att-row-meta { min-width:0; display:flex; flex-direction:column; gap:3px; }
.att-row-meta span:first-child {
  color:var(--text); font-size:11px;
  font-weight:500; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.att-row-meta span:last-child {
  color:var(--dim); font-size:10px;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.att-remove {
  width:24px; height:24px; border-radius:6px; border:1px solid var(--border);
  background:transparent; color:var(--muted); cursor:pointer; font-size:15px;
}
.att-remove:hover { color:#ff5c5c; border-color:#ff5c5c; }
.att-detail-list { display:flex; flex-direction:column; gap:14px; margin:0 0 24px; }
.att-detail { display:flex; flex-direction:column; gap:7px; }
.att-detail-img {
  width:100%; max-height:360px; object-fit:contain; border-radius:10px;
  border:1px solid var(--border); background:var(--input-bg);
}
.idea-tags {
  display:flex; flex-wrap:wrap; gap:7px; margin:0 0 14px;
}
.idea-tag {
  min-height:31px; padding:6px 13px; border-radius:999px;
  border:1px solid var(--border); background:transparent; color:var(--muted);
  font-size:12px; font-weight:500; cursor:pointer; transition:all 0.15s;
}
.idea-tag:hover { border-color:var(--muted); color:var(--text); background:var(--input-bg); }
.idea-footer {
  display:flex; align-items:center; justify-content:space-between; gap:14px;
}
.private-check {
  display:inline-flex; align-items:center; gap:9px;
  color:var(--muted); font-size:13px; cursor:pointer; min-width:0;
}
.private-check input {
  appearance:none; width:18px; height:18px; border-radius:50%;
  border:1px solid var(--border); background:var(--input-bg);
  display:grid; place-items:center; flex-shrink:0; transition:all 0.15s;
  cursor:pointer;
}
.private-check input::before {
  content:""; width:8px; height:8px; border-radius:50%; transform:scale(0);
  background:var(--accent); transition:transform 0.15s;
}
.private-check input:checked {
  border-color:var(--accent); background:transparent;
}
.private-check input:checked::before { transform:scale(1); }
.att-voice {
  border:1px solid var(--border); border-radius:10px; background:var(--input-bg);
  padding:10px; display:flex; flex-direction:column; gap:10px;
}
.att-voice audio { width:100%; }
.att-caption {
  display:flex; justify-content:space-between; gap:12px;
  color:var(--dim); font-size:10px;
}
.att-caption span:first-child {
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap; color:var(--muted);
}

.btn-p {
  padding:10px 18px; border-radius:8px; border:none;
  background:var(--accent); color:#fff;
  font-size:13px; font-weight:500;
  cursor:pointer; transition:all 0.15s;
  display:inline-flex; align-items:center; gap:6px; letter-spacing:0.02em;
}
.btn-p:disabled             { opacity:0.38; cursor:not-allowed; }
.btn-p:not(:disabled):hover { filter:brightness(1.04); transform:translateY(-1px); }

.btn-g {
  padding:10px 16px; border-radius:8px;
  border:1px solid var(--border); background:transparent; color:var(--muted);
  font-size:13px; font-weight:500;
  cursor:pointer; transition:all 0.15s;
}
.btn-g:hover { border-color:var(--muted); color:var(--text); background:var(--input-bg); }

.close-btn {
  width:30px; height:30px; border-radius:8px;
  background:var(--input-bg); border:1px solid var(--border); color:var(--muted);
  cursor:pointer; font-size:20px; line-height:1; display:flex; align-items:center; justify-content:center;
}
.close-btn:hover { color:var(--text); border-color:var(--muted); }

.login-box {
  max-width:420px; text-align:left; display:flex; flex-direction:column; align-items:stretch;
}
.login-head {
  min-height:36px; display:flex; align-items:center; justify-content:flex-start;
  gap:12px; margin-bottom:22px;
}
.login-brand { display:flex; align-items:center; gap:10px; min-width:0; }
.login-back {
  width:34px; height:34px; border-radius:8px;
  border:1px solid var(--border); background:var(--input-bg); color:var(--muted);
  cursor:pointer; display:flex; align-items:center; justify-content:center;
  transition:all 0.15s;
}
.login-back:hover { border-color:var(--muted); color:var(--text); background:var(--sh); }
.login-mark {
  width:34px; height:34px; border-radius:9px; background:var(--accent); color:#fff;
  display:flex; align-items:center; justify-content:center; flex-shrink:0;
  font-size:11px; font-weight:700; letter-spacing:0;
}
.login-title {
  color:var(--text); font-size:16px; font-weight:600;
  line-height:1.1; letter-spacing:0; margin:0;
}
.login-copy {
  display:flex; flex-direction:column; gap:7px;
  color:var(--muted); margin:0 0 18px; letter-spacing:0; font-weight:400;
}
.login-copy strong {
  color:var(--text); font-size:23px; font-weight:500;
  line-height:1.18; letter-spacing:0;
}
.login-copy span {
  color:var(--muted); font-size:14px; line-height:1.5;
}
.login-input { text-align:left; margin-bottom:10px; }
.login-error {
  color:#ff5c5c; font-size:12px;
  line-height:1.5; margin:0 0 10px;
}
.login-submit { justify-content:center; width:100%; }

.account-wrap { position:relative; }
.account-menu {
  position:absolute; top:42px; right:0; width:300px; z-index:80;
  background:var(--surface); border:1px solid var(--border); border-radius:12px;
  padding:10px; box-shadow:0 18px 50px rgba(0,0,0,0.18);
}
.account-list {
  display:flex; flex-direction:column; gap:4px;
  border-bottom:1px solid var(--border); padding-bottom:6px; margin-bottom:6px;
}
.account-avatar {
  width:34px; height:34px; border-radius:50%; flex-shrink:0;
  display:flex; align-items:center; justify-content:center; color:#0e0e13; font-weight:700;
}
.account-copy { min-width:0; display:flex; flex-direction:column; gap:2px; }
.account-copy strong {
  color:var(--text); font-size:13px; font-weight:500;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.account-copy span {
  color:var(--muted); font-size:12px;
  overflow:hidden; text-overflow:ellipsis; white-space:nowrap;
}
.account-row,
.account-action {
  width:100%; border:0; border-radius:8px; background:transparent; color:var(--muted);
  text-align:left; padding:9px 8px; cursor:pointer; font-size:13px;
  display:flex; align-items:center; gap:8px;
}
.account-row:hover,
.account-action:hover { background:var(--input-bg); color:var(--text); }
.account-row.current { color:var(--text); }
.account-row.current .account-copy span { color:var(--muted); }
.account-check { margin-left:auto; color:var(--accent); flex-shrink:0; }
.account-action.muted { color:var(--dim); }

::-webkit-scrollbar       { width:5px; }
::-webkit-scrollbar-track { background:transparent; }
::-webkit-scrollbar-thumb { background:var(--border); border-radius:3px; }


/* ── Drag-and-drop highlight ──────────────────────────────────────────── */
.att-box { position:relative; transition:background 0.15s ease, border-color 0.15s ease; }
.att-box.is-dragging {
  background:var(--accent-bg);
  outline:2px dashed var(--accent);
  outline-offset:6px;
  border-radius:12px;
}
.att-drop-hint {
  position:absolute; inset:0; display:none;
  align-items:center; justify-content:center;
  border-radius:12px; pointer-events:none; z-index:5;
  color:var(--accent); font-size:13px; font-weight:600; letter-spacing:0.02em;
  background:color-mix(in srgb, var(--surface) 70%, transparent);
  backdrop-filter:blur(2px);
}
.att-box.is-dragging .att-drop-hint { display:flex; }

/* ── Add-link button ──────────────────────────────────────────────────── */
.attach-link {
  height:42px; border-radius:999px; flex-shrink:0;
  border:1px solid var(--border); background:var(--input-bg); color:var(--muted);
  display:flex; align-items:center; justify-content:center; cursor:pointer;
  transition:all 0.16s ease; font-weight:500;
  gap:8px; padding:0 14px; font-size:13px;
}
.attach-link:hover {
  border-color:var(--accent); color:var(--accent); background:var(--accent-bg);
  transform:translateY(-1px);
}
.attach-link span { line-height:1; }

/* ── Inline link styling (note bodies, comments) ──────────────────────── */
.note-link {
  color:var(--accent); text-decoration:underline; text-underline-offset:2px;
  text-decoration-thickness:1px; word-break:break-word;
}
.note-link:hover { filter:brightness(1.1); }

/* ── "Example" indicator on template cards ───────────────────────────── */
.example-pill {
  display:inline-flex; align-items:center; gap:5px;
  padding:3px 9px; border-radius:999px;
  font-size:11px; font-weight:600; letter-spacing:0.04em; text-transform:uppercase;
  color:var(--muted); background:var(--sh); border:1px solid var(--border);
}

@media (max-width:860px) {
  .feed-controls { grid-template-columns:1fr; gap:12px; }
  .feed-filter-wrap { order:-1; justify-self:stretch; width:100%; }
  .tcs { justify-content:flex-start; }
}
@media (max-width:767px) {
  .fab {
    left:16px; right:16px; width:auto; bottom:18px;
    justify-content:center;
  }
}
@media (max-width:560px) {
  .app { padding:0 16px 110px; }
  .hdr { align-items:flex-start; gap:12px; }
  .hdr-r { gap:6px; }
  .logo-sub { display:none; }
  .feed-controls { padding:16px 0 20px; }
  .feed-filter-menu { width:100%; min-width:0; }
  .template-grid { grid-template-columns:1fr; }
  .m-overlay { padding:14px; align-items:flex-end; }
  .m-box { padding:22px; border-radius:16px; max-height:94vh; }
  .date-picker-layer {
    position:fixed; inset:0; display:flex; align-items:center; justify-content:center;
    padding:18px; z-index:260;
  }
  .date-scrim {
    display:block; position:absolute; inset:0;
    background:var(--modal-bg); backdrop-filter:blur(9px);
  }
  .date-popover { position:relative; z-index:1; width:min(100%,324px); }
  .att-actions { align-items:flex-start; }
  .voice-recorder { min-width:0; }
  .voice-wave { gap:3px; }
  .idea-footer { align-items:stretch; flex-direction:column; }
  .idea-footer .btn-p { width:100%; justify-content:center; }
  .idea-page { padding:4px 0 40px; }
  .idea-page-card { padding:20px; border-radius:14px; }
  .idea-page-topline { flex-direction:column-reverse; align-items:flex-start; gap:12px; }
  .idea-page-topline h1 { font-size:24px; }
  .idea-page-meta { align-items:flex-start; flex-direction:column; }
  .card-tools { opacity:1; transform:none; }
  .comment-summary { align-items:flex-start; }
  .comment-last { white-space:normal; }
  .comment-form { grid-template-columns:1fr; }
  .comment-form .btn-p { width:100%; justify-content:center; }
}
`;

// ─── Apply theme CSS vars ─────────────────────────────────────────────────────
function applyTheme(isDark) {
  const t = isDark ? DARK : LIGHT;
  const r = document.documentElement;
  r.style.setProperty("--bg",          t.bg);
  r.style.setProperty("--surface",     t.surface);
  r.style.setProperty("--sh",          t.sh);
  r.style.setProperty("--border",      t.border);
  r.style.setProperty("--text",        t.text);
  r.style.setProperty("--muted",       t.muted);
  r.style.setProperty("--dim",         t.dim);
  r.style.setProperty("--accent",      t.accent);
  r.style.setProperty("--accent-bg",   t.accentBg);
  r.style.setProperty("--accent-glow", t.accentGlow);
  r.style.setProperty("--input-bg",    t.inputBg);
  r.style.setProperty("--modal-bg",    t.modal);
  document.body.style.background = t.bg;
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  const [identity, setIdentity]               = useState(null);
  const [accounts, setAccounts]               = useState([]);
  const [authMode, setAuthMode]               = useState("signin");
  const [isDark,   setIsDark]                 = useState(true);
  const [notes,    setNotes]                  = useState([]);
  const [likes,    setLikes]                  = useState({});    // { noteId: [userId, ...] }
  const [readIds,  setReadIds]                = useState(new Set());
  const [search,   setSearch]                 = useState("");
  const [selTags,  setSelTags]                = useState([]);
  const [readF,    setReadF]                  = useState("all");
  const [selectedDate, setSelectedDate]        = useState("");
  const [showDatePicker, setShowDatePicker]    = useState(false);
  const [pickerMonth, setPickerMonth]          = useState(new Date());
  const [privateOnly, setPrivateOnly]          = useState(false);
  const [showFeedFilter, setShowFeedFilter]    = useState(false);
  const [likedOnly, setLikedOnly]             = useState(false);
  const [showNew,  setShowNew]                = useState(false);
  const [templateDraft, setTemplateDraft]      = useState(null);
  const [expanded, setExpanded]               = useState(null);
  const [commentingNote, setCommentingNote]    = useState(null);
  const [templateComments, setTemplateComments] = useState({});
  const [editingNote, setEditingNote]          = useState(null);
  const [deletingId, setDeletingId]           = useState(null);
  const [notif,    setNotif]                  = useState("default");
  const [showAccount, setShowAccount]          = useState(false);
  const [showNotifBanner, setShowNotifBanner] = useState(false);
  const [loading,  setLoading]                = useState(true);
  const lastSeen = useRef(Date.now());

  // Apply theme vars whenever isDark changes
  useEffect(() => { applyTheme(isDark); }, [isDark]);

  // Boot
  useEffect(() => {
    (async () => {
      const [n, id, savedAccounts, themeManual, rd, nb, lk] = await Promise.all([
        db.notes(), db.get("id"), db.get("accounts"), db.get("theme-manual"),
        db.get("rids"), db.get("nb-dismissed"), db.likes(),
      ]);
      setNotes(n || []);
      setLikes(lk || {});

      const roster = mergeAccounts(savedAccounts, [id]);
      const current = isValidIdentity(id)
        ? roster.find(account => account.email === normalizeEmail(id.email)) || makeTeamIdentity(id.email)
        : null;
      setAccounts(roster);
      if (roster.length) await db.set("accounts", roster);
      setIdentity(current);
      setAuthMode(current ? null : "signin");

      if (themeManual !== null && themeManual !== undefined) {
        setIsDark(themeManual === "dark");
      } else {
        setIsDark(systemDark());
      }

      if (rd) setReadIds(new Set(rd));
      if ("Notification" in window) {
        const perm = Notification.permission;
        setNotif(perm);
        if (perm === "default" && !nb) setShowNotifBanner(true);
      }
      setLoading(false);
    })();
  }, []);

  // Listen for system theme changes (only if no manual override)
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = async e => {
      const manual = await db.get("theme-manual");
      if (manual === null || manual === undefined) setIsDark(e.matches);
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Poll for new notes + likes every 30 s
  useEffect(() => {
    if (!identity || loading) return;
    const iv = setInterval(async () => {
      const [fresh, freshLikes] = await Promise.all([db.notes(), db.likes()]);
      const nw = fresh.filter(n =>
        !n.isPrivate && new Date(n.createdAt).getTime() > lastSeen.current && n.authorId !== identity.id
      );
      if (nw.length && notif === "granted") {
        nw.forEach(n => { try { new Notification("💡 New brand idea!", { body: `${n.author}: ${n.title}` }); } catch {} });
      }
      lastSeen.current = Date.now();
      setNotes(fresh);
      setLikes(freshLikes || {});
    }, 30000);
    return () => clearInterval(iv);
  }, [identity, notif, loading]);

  const markRead = useCallback(id => {
    setReadIds(p => { const n = new Set(p); n.add(id); db.set("rids", [...n]); return n; });
  }, []);

  const toggleTheme = async () => {
    const next = !isDark;
    setIsDark(next);
    await db.set("theme-manual", next ? "dark" : "light");
  };

  // Toggle like
  const toggleLike = useCallback(async noteId => {
    const current = await db.likes();
    const arr = current[noteId] || [];
    const uid = identity?.id;
    const next = arr.includes(uid) ? arr.filter(x => x !== uid) : [...arr, uid];
    const updated = { ...current, [noteId]: next };
    if (next.length === 0) delete updated[noteId];
    await db.sLikes(updated);
    setLikes(updated);
    // Also update expanded note if open
    setExpanded(prev => prev && prev.id === noteId ? { ...prev } : prev);
  }, [identity]);

  // Create note
  const handleCreate = async note => {
    const counts = { image: 0, voice: 0 };
    const attachments = (note.attachments || []).map(a => {
      const type = a.type === "voice" ? "voice" : "image";
      counts[type] += 1;
      return {
        ...a,
        name: a.autoNamed
          ? makeAttachmentName(type, type === "voice" ? (a.transcript || note.title || note.body) : (note.title || note.body), counts[type], a.createdAt, a.mime)
          : a.name,
      };
    });
    const n = {
      ...note, attachments, id: gid(),
      title: note.title || "Untitled",
      tag: note.tag || "Other",
      author: identity.name, authorId: identity.id, authorEmail: identity.email, authorColor: identity.color,
      createdAt: new Date().toISOString(),
    };
    const up = [n, ...notes];
    setNotes(up);
    await db.sNotes(up);
    markRead(n.id);
    setShowNew(false);
    setTemplateDraft(null);
  };

  const handleUpdateNote = async nextNote => {
    const normalized = {
      ...nextNote,
      title: nextNote.title || "Untitled",
      tag: nextNote.tag || "Other",
    };
    const up = notes.map(n => n.id === normalized.id ? { ...n, ...normalized, updatedAt: new Date().toISOString() } : n);
    setNotes(up);
    await db.sNotes(up);
    setEditingNote(null);
    setExpanded(prev => prev?.id === normalized.id ? up.find(n => n.id === normalized.id) : prev);
  };

  const handleAddComment = async (noteId, body) => {
    const comment = {
      id: gid(),
      body,
      author: identity.name,
      authorId: identity.id,
      authorEmail: identity.email,
      authorColor: identity.color,
      createdAt: new Date().toISOString(),
    };
    if (noteId.startsWith("template:")) {
      setTemplateComments(prev => ({ ...prev, [noteId]: [...(prev[noteId] || []), comment] }));
      setExpanded(prev => prev?.id === noteId ? { ...prev, comments: [...(prev.comments || []), comment] } : prev);
      setCommentingNote(prev => prev?.id === noteId ? { ...prev, comments: [...(prev.comments || []), comment] } : prev);
      return;
    }
    const up = notes.map(n => n.id === noteId ? { ...n, comments: [...(n.comments || []), comment] } : n);
    setNotes(up);
    await db.sNotes(up);
    setExpanded(prev => prev?.id === noteId ? up.find(n => n.id === noteId) : prev);
    setCommentingNote(prev => prev?.id === noteId ? up.find(n => n.id === noteId) : prev);
  };

  // Delete note
  const handleDeleteConfirm = async () => {
    if (deletingId?.startsWith("template:")) {
      setDeletingId(null);
      if (expanded?.id === deletingId) setExpanded(null);
      if (commentingNote?.id === deletingId) setCommentingNote(null);
      if (editingNote?.id === deletingId) setEditingNote(null);
      return;
    }
    const up = notes.filter(n => n.id !== deletingId);
    setNotes(up);
    await db.sNotes(up);
    setDeletingId(null);
    if (editingNote?.id === deletingId) setEditingNote(null);
    if (expanded?.id === deletingId) setExpanded(null);
    if (commentingNote?.id === deletingId) setCommentingNote(null);
  };

  const handleEnableNotif = async () => {
    if (!("Notification" in window)) { alert("Notifications not supported in your browser."); return; }
    if (notif === "denied") { alert("Notifications are blocked. Enable them in your browser settings and reload."); return; }
    const p = await Notification.requestPermission();
    setNotif(p);
    setShowNotifBanner(false);
    await db.set("nb-dismissed", true);
  };

  const dismissBanner = async () => { setShowNotifBanner(false); await db.set("nb-dismissed", true); };
  const handleLogin = async nextIdentity => {
    const nextAccounts = mergeAccounts(accounts, [nextIdentity]);
    await db.set("id", nextIdentity);
    await db.set("accounts", nextAccounts);
    setAccounts(nextAccounts);
    setIdentity(nextIdentity);
    setShowAccount(false);
    setAuthMode(null);
  };

  const handleAddAccount = () => {
    setShowAccount(false);
    setAuthMode("add");
  };

  const handleSwitchAccount = async account => {
    if (!isValidIdentity(account)) return;
    await db.set("id", account);
    setIdentity(account);
    setShowAccount(false);
  };

  const handleSignOut = async () => {
    setShowAccount(false);
    const remaining = accounts.filter(account => account.id !== identity?.id);
    await db.set("accounts", remaining);
    setAccounts(remaining);
    const nextIdentity = remaining[0] || null;
    await db.set("id", nextIdentity);
    setIdentity(nextIdentity);
    setAuthMode(nextIdentity ? null : "signin");
  };
  const openNewIdea = (template = null) => {
    setTemplateDraft(template);
    setShowNew(true);
  };
  const openDatePicker = () => {
    setPickerMonth(selectedDate ? new Date(`${selectedDate}T00:00:00`) : new Date());
    setShowDatePicker(v => !v);
  };

  // Filtering
  const filtered = notes.filter(n => {
    if (search) {
      const q = search.toLowerCase();
      const attText = (n.attachments || []).map(a => `${a.name || ""} ${a.transcript || ""}`).join(" ").toLowerCase();
      const commentText = (n.comments || []).map(c => `${c.author || ""} ${c.body || ""}`).join(" ").toLowerCase();
      const authorText = `${n.author || ""} ${n.authorEmail || ""}`.toLowerCase();
      if (!n.title?.toLowerCase().includes(q) && !n.body?.toLowerCase().includes(q) && !attText.includes(q) && !authorText.includes(q) && !commentText.includes(q)) return false;
    }
    if (selTags.length && !selTags.includes(n.tag)) return false;
    if (privateOnly) {
      if (!n.isPrivate || n.authorId !== identity?.id) return false;
    } else if (n.isPrivate) {
      return false;
    }
    if (readF === "unread" && readIds.has(n.id)) return false;
    if (selectedDate && ymd(n.createdAt) !== selectedDate) return false;
    if (likedOnly) {
      const myLikes = Object.entries(likes)
        .filter(([, uids]) => uids.includes(identity?.id))
        .map(([id]) => id);
      if (!myLikes.includes(n.id)) return false;
    }
    return true;
  });

  const unread = notes.filter(n => !n.isPrivate && !readIds.has(n.id) && n.authorId !== identity?.id).length;
  const myLikedCount = Object.entries(likes).filter(([, uids]) => uids.includes(identity?.id)).length;

  const isLiked  = id => (likes[id] || []).includes(identity?.id);
  const likeCount = id => (likes[id] || []).length;
  const expandedNote = expanded?.id?.startsWith("template:")
    ? expanded
    : expanded ? notes.find(n => n.id === expanded.id) || expanded : null;
  const commentingResolved = commentingNote?.id?.startsWith("template:")
    ? commentingNote
    : commentingNote ? notes.find(n => n.id === commentingNote.id) || commentingNote : null;
  const feedFilterValue = privateOnly ? "private" : readF;
  const feedFilterLabel = feedFilterValue === "private"
    ? "My unpublished ideas"
    : feedFilterValue === "unread"
      ? "Unread only"
      : "All notes";
  const templateIdeas = IDEA_TEMPLATES.map((template, i) => ({
    ...template,
    id: `template:${i}`,
    attachments: [],
    // Templates are listed as examples — no creator attached.
    author: null,
    authorId: null,
    authorEmail: "",
    authorColor: null,
    createdAt: new Date(2026, 4, 1, 9, i).toISOString(),
    isTemplate: true,
    comments: templateComments[`template:${i}`] || [],
  }));
  const visibleTemplates = selTags.length
    ? templateIdeas.filter(template => selTags.includes(template.tag))
    : templateIdeas;
  const showStarterTemplates = filtered.length === 0 && !search && !selectedDate && !likedOnly && !privateOnly;
  const setFeedFilter = value => {
    setPrivateOnly(value === "private");
    setReadF(value === "unread" ? "unread" : "all");
    setShowFeedFilter(false);
  };

  if (loading) return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", background: "var(--bg)", color: "var(--dim)", fontFamily: MONO, fontSize: 12 }}>
      Loading…
    </div>
  );

  if (!identity) return (
    <>
      <style>{CSS}</style>
      <LoginModal mode="signin" onLogin={handleLogin} />
    </>
  );

  return (
    <>
      <style>{CSS}</style>

      {showNew  && (
        <NewNoteModal
          onClose={() => { setShowNew(false); setTemplateDraft(null); }}
          onSave={handleCreate}
          identity={identity}
          initialNote={templateDraft}
        />
      )}
      {editingNote && (
        <NewNoteModal
          mode="edit"
          onClose={() => setEditingNote(null)}
          onSave={handleUpdateNote}
          identity={identity}
          initialNote={editingNote}
        />
      )}
      {authMode === "add" && (
        <LoginModal
          mode="add"
          onBack={() => setAuthMode(null)}
          onLogin={handleLogin}
        />
      )}
      {commentingResolved && (
        <CommentDialog
          note={commentingResolved}
          onClose={() => setCommentingNote(null)}
          onAddComment={body => handleAddComment(commentingResolved.id, body)}
        />
      )}

      <div className="app" onClick={() => { if (showAccount) setShowAccount(false); if (showFeedFilter) setShowFeedFilter(false); }}>
        {/* ── Header ── */}
        <header className="hdr">
          <div className="hdr-l">
            <div className="logo">
              <span className="logo-ico">bb</span>
              <div>
                <span className="logo-txt">BrandBoard</span>
                <span className="logo-sub">Alty workspace</span>
              </div>
            </div>
          </div>
          <div className="hdr-r">
            {/* Notifications */}
            <button
              className={`icon-btn${notif === "granted" ? " on" : ""}`}
              onClick={handleEnableNotif}
              title={notif === "granted" ? "Notifications on" : "Enable notifications"}
            >
              {notif === "granted" ? <Bell size={16} /> : <BellSlash size={16} />}
              {unread > 0 && <span className="ndot">{unread > 9 ? "9+" : unread}</span>}
            </button>

            {/* Liked filter — replaces theme picker */}
            <button
              className={`icon-btn${likedOnly ? " on" : ""}`}
              onClick={() => setLikedOnly(v => !v)}
              title={likedOnly ? "Show all ideas" : "Show my liked ideas"}
              style={{ fontSize: 16 }}
            >
              <Heart size={16} weight={likedOnly ? "fill" : "regular"} />
              {myLikedCount > 0 && !likedOnly && <span className="ndot" style={{ fontSize: 8 }}>{myLikedCount > 9 ? "9+" : myLikedCount}</span>}
            </button>

            {/* Light / dark toggle */}
            <button
              className="icon-btn"
              onClick={toggleTheme}
              title={isDark ? "Switch to light" : "Switch to dark"}
              style={{ fontSize: 14 }}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* Avatar */}
            {identity && (
              <div className="account-wrap" onClick={e => e.stopPropagation()}>
                <button
                  className="av"
                  style={{ background: identity.color }}
                  onClick={() => setShowAccount(v => !v)}
                  type="button"
                  aria-label="Open account menu"
                  title={identity.email}
                >
                  {identity.name.charAt(0).toUpperCase()}
                </button>
                {showAccount && (
                  <AccountMenu
                    identity={identity}
                    accounts={accounts}
                    onAdd={handleAddAccount}
                    onSwitch={handleSwitchAccount}
                    onSignOut={handleSignOut}
                  />
                )}
              </div>
            )}
          </div>
        </header>

        {/* Notification banner */}
        {showNotifBanner && <NotifBanner onDismiss={dismissBanner} onEnable={handleEnableNotif} />}

        {expandedNote ? (
          <IdeaDetailPage
            note={expandedNote}
            isOwn={expandedNote.authorId === identity?.id}
            isLiked={isLiked(expandedNote.id)}
            likeCount={likeCount(expandedNote.id)}
            onBack={() => setExpanded(null)}
            onLike={() => toggleLike(expandedNote.id)}
            onAddComment={body => handleAddComment(expandedNote.id, body)}
            onEdit={() => { setEditingNote(expandedNote); setExpanded(null); }}
            onDeleteRequest={() => { setDeletingId(expandedNote.id); setExpanded(null); }}
          />
        ) : (
          <>
        {/* ── Filters ── */}
        <div className="filters">
          <div className="sw">
            <MagnifyingGlass className="s-ico" size={15} />
            <input
              className="s-in" placeholder="Search ideas, keywords…"
              value={search} onChange={e => setSearch(e.target.value)}
            />
            {search && (
              <button className="clr-btn" onClick={() => setSearch("")} aria-label="Clear search">
                <X size={14} weight="bold" />
              </button>
            )}
            <button
              className={`date-trigger${selectedDate ? " on" : ""}`}
              onClick={openDatePicker}
              type="button"
              aria-label="Pick a date"
              title={selectedDate ? `Date: ${selectedDate}` : "Pick a date"}
            >
              <CalendarBlank size={18} />
            </button>
            {showDatePicker && (
              <DatePickerDialog
                selectedDate={selectedDate}
                month={pickerMonth}
                onMonthChange={setPickerMonth}
                onSelect={date => { setSelectedDate(date); setShowDatePicker(false); }}
                onClear={() => { setSelectedDate(""); setShowDatePicker(false); }}
                onClose={() => setShowDatePicker(false)}
              />
            )}
          </div>
        </div>

        {/* ── Feed ── */}
        <main>
          {showStarterTemplates ? (
            <StarterTemplates
              templates={visibleTemplates}
              count={visibleTemplates.length}
              identity={identity}
              controls={
                <div className="feed-controls">
                  <div className="tcs">
                    <button className={`chip${selTags.length === 0 ? " on" : ""}`} onClick={() => setSelTags([])}>All</button>
                    {TAGS.map(t => {
                      const c = TAG_C[t]; const on = selTags.includes(t);
                      return (
                        <button key={t} className="chip"
                          style={on ? { background: c.bg, color: c.text, borderColor: c.bd } : {}}
                          onClick={() => setSelTags(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])}>
                          {t}
                        </button>
                      );
                    })}
                  </div>
                  <div className="feed-filter-wrap" onClick={e => e.stopPropagation()}>
                    <button
                      className={`feed-filter-trigger${showFeedFilter ? " open" : ""}`}
                      onClick={() => setShowFeedFilter(v => !v)}
                      type="button"
                      aria-expanded={showFeedFilter}
                    >
                      <span>{feedFilterLabel}</span>
                      <CaretDown size={16} />
                    </button>
                    {showFeedFilter && (
                      <div className="feed-filter-menu">
                        {[
                          ["all", "All notes"],
                          ["unread", "Unread only"],
                          ["private", "My unpublished ideas"],
                        ].map(([value, label]) => (
                          <button
                            key={value}
                            className={feedFilterValue === value ? "selected" : ""}
                            onClick={() => setFeedFilter(value)}
                            type="button"
                          >
                            <Check size={15} weight="bold" />
                            <span>{label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              }
              isLiked={isLiked}
              likeCount={likeCount}
              deletingId={deletingId}
              onOpen={setExpanded}
              onComment={setCommentingNote}
              onLike={toggleLike}
              onEdit={setEditingNote}
              onDeleteRequest={setDeletingId}
              onDeleteConfirm={handleDeleteConfirm}
              onDeleteCancel={() => setDeletingId(null)}
            />
          ) : (
            <>
              <div className="feed-controls">
            <div className="tcs">
              <button className={`chip${selTags.length === 0 ? " on" : ""}`} onClick={() => setSelTags([])}>All</button>
              {TAGS.map(t => {
                const c = TAG_C[t]; const on = selTags.includes(t);
                return (
                  <button key={t} className="chip"
                    style={on ? { background: c.bg, color: c.text, borderColor: c.bd } : {}}
                    onClick={() => setSelTags(p => p.includes(t) ? p.filter(x => x !== t) : [...p, t])}>
                    {t}
                  </button>
                );
              })}
            </div>
            <div className="feed-filter-wrap" onClick={e => e.stopPropagation()}>
              <button
                className={`feed-filter-trigger${showFeedFilter ? " open" : ""}`}
                onClick={() => setShowFeedFilter(v => !v)}
                type="button"
                aria-expanded={showFeedFilter}
              >
                <span>{feedFilterLabel}</span>
                <CaretDown size={16} />
              </button>
              {showFeedFilter && (
                <div className="feed-filter-menu">
                  {[
                    ["all", "All notes"],
                    ["unread", "Unread only"],
                    ["private", "My unpublished ideas"],
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      className={feedFilterValue === value ? "selected" : ""}
                      onClick={() => setFeedFilter(value)}
                      type="button"
                    >
                      <Check size={15} weight="bold" />
                      <span>{label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
              <div className="meta">
                <span className="ct">{filtered.length} idea{filtered.length !== 1 ? "s" : ""}</span>
                {unread > 0 && (
                  <button className="ur-btn" onClick={() => setReadF("unread")}>{unread} unread</button>
                )}
                {privateOnly && (
                  <span className="liked-meta">unpublished ideas</span>
                )}
                {likedOnly && (
                  <span className="liked-meta">
                    <Heart size={13} weight="fill" />
                    liked only
                  </span>
                )}
              </div>
              {filtered.length === 0 ? (
                <div className="empty">
                  <div className="empty-ttl">
                    {privateOnly ? "No unpublished ideas yet" : likedOnly ? "No liked ideas yet" : "No matching ideas"}
                  </div>
                  <div className="empty-bd">
                    {privateOnly
                      ? "Use private ideas for drafts you want to polish before sharing."
                      : likedOnly
                        ? "Heart the ideas that inspire you and they will live here."
                        : "Try a different search, tag, or date."}
                  </div>
                </div>
              ) : (
                <div className="grid">
                  {filtered.map((n, i) => (
                    <NoteCard
                      key={n.id} note={n} idx={i}
                      isRead={readIds.has(n.id)}
                      isOwn={n.authorId === identity?.id}
                      isLiked={isLiked(n.id)}
                      likeCount={likeCount(n.id)}
                      isDeleting={deletingId === n.id}
                      onClick={() => { if (deletingId !== n.id) { setExpanded(n); markRead(n.id); } }}
                      onComment={() => setCommentingNote(n)}
                      onLike={() => toggleLike(n.id)}
                      onEdit={() => setEditingNote(n)}
                      onDeleteRequest={() => setDeletingId(n.id)}
                      onDeleteConfirm={handleDeleteConfirm}
                      onDeleteCancel={() => setDeletingId(null)}
                    />
                  ))}
                </div>
              )}
            </>
          )}
        </main>
          </>
        )}
      </div>

      {!expandedNote && (
        <button className="fab" onClick={() => openNewIdea()}>
          <span>New idea</span>
          <Plus size={17} weight="bold" />
        </button>
      )}
    </>
  );
}
