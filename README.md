# Princess Party — Drink Menu

A two-slide iPad menu for the party: cocktails and non-alcoholic drinks, switchable between Russian and English.

## Local preview

```
python3 -m http.server 4173
```

Then open http://localhost:4173.

## Editing the menu

All drink content lives in [`script.js`](script.js) in the `MENU` object (`ru` and `en` keys). Each slide has a `title`, `subtitle`, `note`, `footer`, and a list of `items` (name, badge, vibe, description, ingredients).

## Deploying

Pushing to `main` triggers the GitHub Actions workflow in `.github/workflows/pages.yml`, which publishes the site to GitHub Pages. Enable Pages once in the repo settings: **Settings → Pages → Source: GitHub Actions**.
