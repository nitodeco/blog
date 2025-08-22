# Blog

This is my personal blog. It's based on the [AstroPaper](https://github.com/satnaing/astro-paper) theme.

## Project Structure

```bash
/
├── public/
│   ├── assets/
|   ├── pagefind/ # auto-generated when build
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── favicon.svg
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── icons/
│   │   └── images/
│   ├── components/
│   ├── data/
│   │   └── blog/
│   │       └── some-blog-posts.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── constants.ts
│   └── content.config.ts
└── astro.config.ts
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All blog posts are stored in `src/data/blog` directory.

## Development

This project uses [bun](https://bun.sh) as package manager.

Install dependencies:

```bash
bun install
```

Start the development server:

```bash
bun run dev
```

## License

Licensed under the MIT License, Copyright © 2025.
Copyright belongs to the original author, [Sat Naing](https://satnaing.dev).
