# Yunseo Do — Research Homepage

A small static research homepage inspired by the layout of [Inhwa Song's site](https://inhwasong.com/) and the component/data separation of [webpagetemplate](https://github.com/Hyunseung-Lim/webpagetemplate). This implementation is original and has no runtime dependencies.

## Update the site

- Edit `src/content.mjs` for profile links, news, research, projects, experience, and honors.
- Edit `src/styles.css` for colors, typography, and layout. The acorn-brown palette is defined at the top of the file.
- Replace `src/assets/yunseo-portrait.webp` to update the portrait.
- Run `node scripts/build.mjs` to regenerate the static files in `dist/` (`npm run build` works where npm is installed).

`dist/` is the ready-to-publish site. Preview it with any static file server, such as `python -m http.server 8765 --directory dist`.

## GitHub Pages

For a public academic homepage, create a repository named `doyunseo.github.io` and publish the contents of `dist/` at the repository root (or use a GitHub Actions workflow to upload `dist/`). The site then lives at `https://doyunseo.github.io/`; a custom domain can be added later in the repository's Pages settings.
