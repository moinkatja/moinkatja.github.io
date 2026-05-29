# Katja Blau — Data Analytics Portfolio

React portfolio for [Katja Blau](https://github.com/moinkatja): Tableau, SQL, Python, and Jupyter.

**Stack:** React 19, Vite 8, TypeScript, Tailwind CSS v4, Framer Motion.

## Edit content

| File | Purpose |
|------|---------|
| `src/data/site.ts` | Name, links, Tableau profile URLs |
| `src/data/projects.ts` | Projects, featured flag, Tableau + notebook links |
| `src/data/skills.ts` | Skills |
| `src/data/credentials.ts` | Certificates (optional `href` per item) |
| `src/data/story.ts` | Scrollytelling steps |

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

For local preview matching your live URL:

```bash
cp .env.example .env
# moinkatja.github.io repo → VITE_BASE_PATH=/
# project site → VITE_BASE_PATH=/repo-name/
npm run dev
```

## Deploy to GitHub Pages

### Main URL: `https://moinkatja.github.io` (recommended)

1. Create or use a repo named **`moinkatja.github.io`** (exact name, public).
2. Push this project to that repo’s `main` branch.
3. **Settings → Pages → Source:** GitHub Actions.
4. Site URL: **https://moinkatja.github.io**

The workflow uses `VITE_BASE_PATH=/` for `*.github.io` repos automatically.

### Alternative: project URL

Repo named `portfolio` → **https://moinkatja.github.io/portfolio/**

**Manual build (user site):**

```bash
VITE_BASE_PATH=/ npm run build
```

Output is in `dist/` (ignored by git; CI builds fresh).

## Publish checklist

- [ ] Repo is **`moinkatja.github.io`** for root URL (or accept `/portfolio/` URL)
- [ ] GitHub + LinkedIn URLs in `site.ts` are correct
- [ ] Tableau thumbnails open from project cards
- [ ] Jupyter repos on GitHub; uncomment `notebook` links in `projects.ts` when live
- [ ] Optional: certificate links in `credentials.ts`

## License

MIT
