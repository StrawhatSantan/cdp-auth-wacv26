# CDP Auth WACV 2026 Project Page

Project page for:

**Diffusion-Based Authentication of Copy Detection Patterns: A Multimodal Framework with Printer Signature Conditioning**

Built with Astro + MDX and deployed with GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:4321>.

## Build

```bash
npm run build
```

## Main content files

- `src/paper.mdx`: project-page content and metadata.
- `src/pages/index.astro`: page layout (includes light/dark theme toggle behavior).
- `src/assets/illustration.png`: figure from paper.
- `src/assets/scheme.png`: method overview figure.
- `public/paper.pdf`: downloadable paper PDF.

## Deployment

This repository includes `.github/workflows/astro.yml` for GitHub Pages deployment from the `main` branch.

In GitHub:

1. Open repository `Settings`.
2. Go to `Pages`.
3. Set source to **GitHub Actions**.
4. Push to `main`.

The site will be published at:

`https://<username>.github.io/cdp-auth-wacv26/`

## TODO links

Current author/arXiv/slides links use placeholders and should be replaced in `src/paper.mdx` when final URLs are available.
