# Editorial academic template assets

Adapted from [sbryngelson/academic-website-template](https://github.com/sbryngelson/academic-website-template) at commit `1fe64d1c1e8a6465ac267534b095119101dfa550`.

## Sources and output

- `_sass/editorial/` contains the template's complete `_sass/` tree with local color and readability adaptations.
- `_sass/editorial/theme.scss` is the template's `assets/main.scss` with only Jekyll front matter removed. This is the compilation entry point.
- `assets/editorial.css` is the complete, compressed output, compiled with **Dart Sass 1.108.1**. It includes the template's selected Bootstrap 5.3.8 modules and editorial styles. It can be served by the existing Jekyll 3 / GitHub Pages build without adding Ruby plugins.
- `assets/fonts/` contains the template's exact Source Serif 4, DM Sans, and JetBrains Mono WOFF2 files, including Latin and Latin Extended subsets and their original license files.

Font URLs such as `fonts/dm-sans-latin-normal-wght.woff2` are relative to `/assets/editorial.css`, so they resolve to `/assets/fonts/` without modification. All fonts and styles are served locally.

The upstream tree contains a legacy `_sass/bootstrap.scss` file based on Bootswatch/Bootstrap 4.5.2. It is retained as source but is **not imported** by `theme.scss`. The compiled editorial CSS does not contain Lato or the previous template's Bootstrap 4.6 styles.

## Rebuild

From the repository root, using the official Sass npm package:

```sh
npx --yes --package sass@1.108.1 sass --load-path=_sass/editorial --style=compressed --no-source-map --quiet-deps --silence-deprecation=import _sass/editorial/theme.scss assets/editorial.css
```

Alternatively, install Dart Sass 1.108.1 outside the website repository and run its `sass` command with the same arguments. The migration used a workspace-only pnpm install and `node <compiler-directory>/node_modules/sass/sass.js`; no package dependencies were added to this repository.

The unmodified Bootstrap source emits Sass deprecation warnings about legacy functions with this compiler; compilation succeeds. Commit the updated `assets/editorial.css` after changing Sass sources.

The warm/cool palette is defined in `_sass/editorial/base/_variables.scss`. The light-mode cool base is also set by `accent_color` in `_config.yml`. Warm accents mark internal links, in-page disclosures, research keywords, and heading rules; cool accents mark external links, resource buttons, and year badges. Navigation branding and inactive labels stay neutral; only active and hovered navigation items use the warm accent. All pill labels and buttons are borderless, with a warm tint for disclosures and keywords. Link destinations are classified in `assets/js/editorial.js`, using both the current and canonical site origins so previews behave like the live site. Dark-mode values are explicit, print colors remain neutral, and text selection uses the theme's contrast foreground.

## Licenses and provenance

- Template MIT license: `LICENSE`.
- Bootstrap 5.3.8 MIT license: `Bootstrap-LICENSE`.
- Legacy Bootswatch MIT license: `Bootswatch-LICENSE`.
- Fonts: `../../fonts/LICENSE-source-serif-4.md`, `../../fonts/LICENSE-dm-sans.txt`, and `../../fonts/LICENSE-jetbrains-mono.txt` (SIL Open Font License 1.1).
- `manifest.json` records source paths, the pinned template revision, and SHA-256 hashes of copied sources and the initial compiled stylesheet.

The website's existing root license remains in place.

Trailing spaces in the template MIT license and the DM Sans / JetBrains Mono license notices were removed for repository whitespace checks; their notice text is unchanged. The manifest records these whitespace-only adaptations.
