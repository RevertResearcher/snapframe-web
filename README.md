# SnapFrame — Portfolio (Next.js + TypeScript)


Quick start:

```bash
npm install
npm run dev
```

- Add your images to `public/images/`. The gallery now reads images automatically from that folder via `lib/gallery.ts`.
- Theme tokens live in `app/globals.css` and use CSS variables for easy swapping.
- Placeholder Open Graph image: `public/og-image.svg` (replace with a PNG export for best social previews).

To build for production:

```bash
npm run build
npm start
```

Deploy to Vercel:

1. Push your repository to GitHub.
2. Go to https://vercel.com/new and connect your GitHub repo.
3. Use the default Next.js settings and deploy.
4. Set the root directory to the repository root if needed.

After deploy, Vercel will provide a public URL for your portfolio.

Performance & audit tips:

- Use `next build` then run Lighthouse in Chrome DevTools for mobile audit.
- All gallery images use `next/image` for automatic optimization; add properly sized images in `public/images/` and keep filenames stable.

How to add a work entry:

1. Put the image file in `public/images/`.
2. Edit `content/works.ts` and add a new object with `id`, `title`, `category`, `image` (e.g. `/images/your-file.jpg`), `description`, and `date`.

