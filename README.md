<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# BacTermFinder Landing Page

An elegant, interactive narrative site presenting the BacTermFinder research paper - a machine learning tool for bacterial terminator prediction.

[BacTermFinder](https://github.com/BioinformaticsLabAtMUN/BacTermFinder) uses an ensemble of convolutional neural networks (CNNs) to identify bacterial terminators from DNA sequences, supporting both intrinsic and factor-dependent terminator types across multiple bacterial and archaeal species.

## Features

- Interactive 3D visualizations using Three.js
- Smooth scroll-triggered animations with Framer Motion
- Responsive design with Tailwind CSS
- Blog system for research updates
- SEO-optimized with automatic sitemap generation
- TypeScript support throughout

## Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber / Three.js
- **Routing**: React Router DOM
- **SEO**: React Helmet, sitemap generation
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js (latest LTS recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:5173 to view the site.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Project Structure

```
src/
├── components/
│   ├── sections/        # Main page sections (Hero, Introduction, etc.)
│   ├── ui/              # Reusable UI components (Navigation, Footer)
│   ├── QuantumScene.tsx # 3D visualization component
│   └── Diagrams.tsx     # Diagram components
├── blog/
│   ├── posts/           # Markdown blog posts
│   ├── BlogIndex.tsx    # Blog listing page
│   └── BlogPost.tsx     # Individual blog post view
├── hooks/
│   └── useScroll.ts     # Custom scroll hooks
├── App.tsx              # Main application component
├── index.css            # Global styles
└── index.tsx            # Application entry point
```

## Deployment

The project is configured for deployment on Netlify with the included `netlify.toml` configuration file.

## Learn More

- [BacTermFinder Research Paper](bactermfinder-paper.md)
- [GitHub Repository](https://github.com/BioinformaticsLabAtMUN/BacTermFinder)
