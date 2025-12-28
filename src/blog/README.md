# Blog Setup

This blog is built with Markdown files that are processed at build time using Vite's `import.meta.glob`.

## Adding a New Blog Post

1. Create a new `.md` file in `src/blog/posts/`
2. Add frontmatter at the top of the file:

```markdown
---
title: "Your Post Title"
date: "2025-01-15"
description: "A brief description of your post"
tags: ["tag1", "tag2"]
---

## Your Content

Write your blog post here using standard Markdown.
```

3. The post will be automatically picked up and available at `/blog/[filename-without-extension]`

## Features

- Build-time static generation for SEO
- Frontmatter for metadata (title, date, description, tags)
- Automatic route generation
- React Router for client-side navigation
- SEO tags via react-helmet-async
- Responsive design with Tailwind CSS

## Dependencies

- `gray-matter` - Parse frontmatter
- `marked` - Convert Markdown to HTML
- `react-router-dom` - Routing
- `react-helmet-async` - SEO meta tags
- `@tailwindcss/typography` - Blog content styling
