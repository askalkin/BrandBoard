// Vercel serverless function — Google OAuth token verification.
//
// Setup:
//   1. Go to https://console.cloud.google.com → APIs & Services → Credentials
//   2. Create an OAuth 2.0 Client ID (Web application)
//   3. Add your Vercel domain to Authorised JavaScript origins
//   4. Copy the Client ID and add it to Vercel env vars as VITE_GOOGLE_CLIENT_ID
//      (no server-side secret needed — we verify via Google's tokeninfo endpoint)
//
// POST /api/auth
//   Body: { credential: "<google-jwt>" }
//   Returns: { ok: true, email, name } | { ok: false, error }

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ ok: false, error: "Method not allowed" });

  const { credential } = req.body || {};
  if (!credential) return res.status(400).json({ ok: false, error: "Missing credential" });

  try {
    // Verify the Google JWT via Google's tokeninfo endpoint.
    // This validates the signature, expiry, and audience automatically.
    const r = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${encodeURIComponent(credential)}`
    );

    if (!r.ok) return res.status(401).json({ ok: false, error: "Invalid or expired token" });

    const payload = await r.json();

    // Must be issued for our Google Cloud client
    const clientId = process.env.VITE_GOOGLE_CLIENT_ID;
    if (clientId && payload.aud !== clientId) {
      return res.status(401).json({ ok: false, error: "Token audience mismatch" });
    }

    // Must be a real, verified alty.co Google Workspace account
    if (payload.hd !== "alty.co") {
      return res.status(403).json({ ok: false, error: "Access restricted to alty.co accounts" });
    }
    if (payload.email_verified !== "true") {
      return res.status(403).json({ ok: false, error: "Email address not verified" });
    }

    return res.status(200).json({ ok: true, email: payload.email, name: payload.name });
  } catch {
    return res.status(500).json({ ok: false, error: "Verification failed. Please try again." });
  }
}
