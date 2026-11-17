# anushikaj.github.io

Personal portfolio of **Anushika Jayasekara**, Mechatronics Engineer. English and German.

Live: https://anushikaj.github.io

Built with [Astro](https://astro.build). Every push to `main` deploys automatically through GitHub Actions.

## How to update

| What you want to change | Where |
|---|---|
| A project's text, numbers, photos | `src/content/projects/en/<project>.md` and `src/content/projects/de/<project>.md` |
| Add a new project | Copy an existing `.md` file in **both** `en/` and `de/`, rename it, edit it |
| Photos and videos | `public/projects/<project>/` |
| Experience, publications, awards, skills, certificates | `src/data/profile.ts` |
| Buttons, headings, menu text | `src/i18n/ui.ts` |
| Colours and fonts | `src/styles/global.css` |
| Home-page snake animation | `src/components/SnakeHero.astro` |

A project without a `cover` photo shows a line drawing instead; set `art:` to `gem`, `mudskipper`, `seal`, `heatsink`, `box` or `snake`.

## Run it on your computer

```bash
npm install
npm run dev      # opens http://localhost:4321
```

Then push your changes to `main`. The live site updates in about a minute.
