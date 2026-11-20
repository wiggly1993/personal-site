# Locations (macOS)

```
/Users/benjablonski/Local_Folder/WebPage/
├── personal-site/               ← THIS REPO (git root, private GitHub repo)
├── Projects_Shortened_rebuild/
│   ├── Projects_Shortened.pdf   ← full project slides (also .tex source)
│   └── images/                  ← SOURCE images (read-only, copy from here)
├── AI_Projects/                 ← old project code/notebooks (read-only reference)
└── DRL/                         ← deep RL project code (read-only reference)
```

Rules:
- Never edit or delete anything outside `personal-site/`.
- The build must never reference paths outside the repo — Cloudflare only sees the repo. Copy images in (see [images.md](images.md)).
