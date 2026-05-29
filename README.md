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

For local preview matching GitHub Pages (project site):

```bash
cp .env.example .env
# Set VITE_BASE_PATH=/your-repo-name/ then:
npm run dev
```

## Deploy to GitHub Pages

1. Push this repo to GitHub (`main` branch).
2. **Settings → Pages → Build and deployment → Source:** GitHub Actions.
3. The workflow sets `VITE_BASE_PATH` from your repo name automatically.

**User site** (`username.github.io` root repo): set repository variable or change workflow env to `VITE_BASE_PATH=/`.

**Manual build:**

```bash
VITE_BASE_PATH=/your-repo-name/ npm run build
```

Output is in `dist/` (ignored by git; CI builds fresh).

## Publish checklist

- [ ] GitHub + LinkedIn URLs in `site.ts` are correct
- [ ] Tableau thumbnails open from project cards
- [ ] Jupyter repos on GitHub; uncomment `notebook` links in `projects.ts` when live
- [ ] Optional: certificate links in `credentials.ts`
- [ ] Repo name matches GitHub Pages URL (`/repo-name/`)

## License

MIT
