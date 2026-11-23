# Working rules

- **Environment first:** never install globally; every command starts with `source .venv/bin/activate &&`. Full details: [environment.md](environment.md).
- **Keep original images:** never delete, overwrite or rename an original image (source folder or project folder) unless the owner explicitly says so. Merged or resized versions are new files beside the originals.
- **Ask before:** pushing, deleting files, adding any dependency not listed in [tech-stack.md](tech-stack.md), or changing the schema.
- Small, focused commits with clear messages.
- After visual changes, run the dev server and check the result before saying "done".
- Keep everything editable by a beginner: clear names, short components, comments only where the intent isn't obvious.
- **Never fabricate** project facts, metrics, links or contact details. Use `TODO(owner)`.
- **Docs:** many small `.md` files, none over 200 words (including CLAUDE.md). CLAUDE.md is only a brief description + index pointing to every doc. Update the matching small file when something changes.
