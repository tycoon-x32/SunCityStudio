Suncity Studio — PWA setup

This project was updated to support basic Progressive Web App (PWA) features:

What was added
- `manifest.json` — Web App Manifest (uses the provided favicon URL as icons).
- `workers.js` — Service Worker that precaches site assets and serves them from cache.
- `index.html` — manifest link and mobile/apple meta tags were added.
- `script.js` — Registers the service worker and handles the `beforeinstallprompt` event.

How to test locally (recommended)

PWAs require a secure context (HTTPS) or `http://localhost`. You can test locally on Windows with PowerShell.

1) From the project folder (where `index.html` is), run one of these:

# Using Python 3 (built-in)
python -m http.server 8000

# Or using npx http-server (Node.js required)
npx http-server -c-1 -p 8000

2) Open your browser and navigate to:

http://localhost:8000

3) Open DevTools > Application (in Chrome/Edge) to inspect:
- Manifest: ensure icons and theme_color are visible
- Service Worker: confirm `workers.js` is registered and activated
- Offline: after SW install, try disabling network and reload — app should still load from cache

4) Install prompt:
- On supported browsers you may get an "Install" prompt (or you can add an install button to the UI with id `install-btn`).

Notes and caveats
- The manifest references a remote image URL for icons. For best results, host local icon files (192x192 and 512x512) and update `manifest.json` accordingly.
- For production, serve over HTTPS.

If you want, I can:
- Add a local `icons/` folder with generated 192x192 and 512x512 icons.
- Add an explicit visible install UI and styles.
- Improve the service worker strategy (e.g., runtime caching for images, cache versioning tool).
