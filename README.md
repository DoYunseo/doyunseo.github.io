# Yunseo Do

Personal research homepage: [doyunseo.github.io](https://doyunseo.github.io/)

## Update

- Edit `src/content.mjs` for text and links, `src/styles.css` for design, and `src/assets/` for the photo and published paper PDFs.
- Run `node scripts/build.mjs` to generate `dist/` and preview with `python -m http.server 8765 --directory dist`.
- Push to `main` to deploy through GitHub Actions.

## Visitor analytics

Create a Google Analytics 4 web stream for `https://doyunseo.github.io/`, then add its `G-...` measurement ID as the repository Actions variable `GA_MEASUREMENT_ID`. Re-run the Pages workflow. Analytics loads only after visitors opt in; country and region are available in **Reports → User attributes → Demographic details**.
