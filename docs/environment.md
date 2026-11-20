# Local environment (VITAL)

- **NEVER install anything globally:** no `brew`, no `npm -g`, no system `pip`, no `sudo`.
- Use only the local `.venv` in this folder. Node and npm come from it (installed via nodeenv).
- Start every shell command with:
  ```sh
  source .venv/bin/activate && <command>
  ```
- Check the toolchain:
  ```sh
  source .venv/bin/activate && which node && node -v
  ```
- `.venv/` is in `.gitignore` — never commit it.
- `gh` (GitHub CLI) is not installed and won't be. Create GitHub repos on github.com and connect with `git remote add`.
- Astro needs Node ≥ 22.23.4. `.nvmrc` pins Node 24 (LTS) for Cloudflare builds.
- Dev server: `source .venv/bin/activate && npx astro dev --background` (stop with `npx astro dev stop`). See [../AGENTS.md](../AGENTS.md).
