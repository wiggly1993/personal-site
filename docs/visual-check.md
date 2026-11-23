# Visual check (after any visual change)

1. Start the dev server: `source .venv/bin/activate && npx astro dev --background`
2. From a scratch folder outside the repo, take full-page shots at desktop and mobile widths:
   ```sh
   source <repo>/.venv/bin/activate && node <repo>/tools/screenshot.mjs http://localhost:4321/ home-d.png 1440 900
   source <repo>/.venv/bin/activate && node <repo>/tools/screenshot.mjs http://localhost:4321/ home-m.png 390 844 mobile
   ```
3. Look at the `-0.png`, `-1.png`, … chunks. The script also prints `H-OVERFLOW` if the page scrolls sideways.
4. Stop the server: `npx astro dev stop`.

Notes:
- It uses the installed Google Chrome app plus Node's built-in WebSocket, so nothing gets installed.
- It scrolls with `behavior: "instant"`. The site sets `scroll-behavior: smooth`, which otherwise stops scroll reveals from firing.
- The dark pill at the bottom of dev screenshots is Astro's dev toolbar. It doesn't appear on the live site.
- Transparent PNG diagrams need a white background behind them (tiles and gallery already have one).
