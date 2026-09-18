# Yunseo Do — Research Homepage

A small static research homepage inspired by the layout of [Inhwa Song's site](https://inhwasong.com/) and the component/data separation of [webpagetemplate](https://github.com/Hyunseung-Lim/webpagetemplate). This implementation is original and has no runtime dependencies.

## Update the site

- Edit `src/content.mjs` for profile links, news, research, projects, experience, and honors.
- Edit `src/styles.css` for colors, typography, and layout. The acorn-brown palette is defined at the top of the file.
- Replace `src/assets/yunseo-portrait.webp` to update the portrait.
- Run `node scripts/build.mjs` to regenerate the static files in `dist/` (`npm run build` works where npm is installed).

`dist/` is the ready-to-publish site. Preview it with any static file server, such as `python -m http.server 8765 --directory dist`.

## GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds `dist/` and publishes it whenever `main` is pushed.

1. Under the `DoYunseo` GitHub account, create an empty **public** repository named `doyunseo.github.io`. Leave the README, `.gitignore`, and license creation boxes unchecked.
2. In the new repository, go to **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. From this project directory, push the local `main` branch:

   ```sh
   git remote add github https://github.com/DoYunseo/doyunseo.github.io.git
   git push -u github main
   ```

4. Check the repository's **Actions** tab for a successful “Deploy to GitHub Pages” run. The published address is `https://doyunseo.github.io/`.

For later updates, edit files in `src/`, commit, and run `git push github main`. GitHub Actions rebuilds and publishes the site. A custom domain can be added later in the repository's Pages settings.
