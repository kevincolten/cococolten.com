# cococolten.com

Actor site for Coco Colten. One page, one content file. Built on the same engine as lauracolten.com.

## How it's put together

- `content.json` holds all the copy: the name, the reel, credits, stills, the bio and contact details. Edit this file to change what the site says.
- `js/page.js` lays out the page. `js/components.js` has the shared pieces: the reel player with adaptive streaming, posters, icons and socials. `js/main.js` loads the content and renders the page.
- `css/base.css` is the reset and the shared components. `css/page.css` is the look: soft pink and lavender from her series poster, Fredoka type, and a phone frame around the vertical reel.
- `assets.json` lists every image: the IMDb posters and the stills from her scenes (hosted at media.austindevs.com/coco-colten/site/). `scripts/fetch-assets.mjs` downloads them at build time.

## The reel

`reels.verticalDrama.video` takes an HLS playlist (`.m3u8`), a YouTube link or an `.mp4`. It is 9:16 (`"orientation": "vertical"`). Until it's set, the player shows the poster and "Reel coming soon".

The reels are HLS streams in the `portfolio-media` R2 bucket, served from https://media.austindevs.com/coco-colten/<reel>/. Each reel folder holds `master.m3u8`, four renditions, `720p.mp4` and a poster. To make a new one:
1. Run `bash scripts/encode-reel.sh input.mp4 out/<reel>`.
2. Upload the folder.
3. Point `video` at the folder's `master.m3u8`.

## Still placeholder

- The bio and contact email (hello@cococolten.com needs to exist).
- Headshots: the hero and about photos are stills from the series.

## Run it locally

    npm run dev        # http://localhost:8766

## Deploy on Cloudflare Pages

Framework preset None. Build command `npm run build`. Output directory `/`.
