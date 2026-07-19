# Birthday Gift Site (single page)

Password → Playlist + CD voice note, all in one scrollable page.

## What's here
- `src/components/PasswordGate.tsx` — the lock screen. **Password is set on the
  `correctPassword` line near the top of this file** — change it there anytime.
- `src/components/SongPlaylist.tsx` — the 18-song playlist player.
- `src/components/VoiceNote.tsx` — the CD case / voice message player.
- `src/App.tsx` — wires them together: shows the gate first, then (once
  unlocked) the playlist + CD on the background image, scrollable.

## Run locally
```bash
npm install
npm run dev
```

## Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

## Deploy to Vercel
1. Go to https://vercel.com/new
2. Import the GitHub repo you just pushed.
3. Vercel auto-detects Vite — leave the defaults (Build Command: `vite build`,
   Output Directory: `dist`) and click **Deploy**.
4. Done — you'll get a live URL. Any future `git push` to `main` redeploys
   automatically.
