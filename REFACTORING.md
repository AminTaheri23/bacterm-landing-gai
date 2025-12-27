# BacTermFinder Landing Page

A modern, refactored React application for showcasing the BacTermFinder research paper - a bacterial terminator prediction tool using CNN ensembles.

## Project Structure

```
bacterm-landing-gai/
├── src/
│   ├── components/
│   │   ├── sections/          # Page sections (Hero, Introduction, Methods, etc.)
│   │   ├── ui/               # Reusable UI components (Navigation, Footer)
│   │   ├── Diagrams.tsx       # Scientific visualizations
│   │   └── QuantumScene.tsx   # Three.js animations
│   ├── hooks/                 # Custom React hooks
│   ├── types/                 # TypeScript type definitions
│   ├── App.tsx                # Main application component
│   ├── main.tsx              # Application entry point
│   └── index.css             # Global styles
├── public/                   # Static assets
├── package.json
├── vite.config.ts
├── tsconfig.json             # Root TypeScript config
├── tsconfig.app.json         # Application TypeScript config
├── tsconfig.node.json        # Node/Vite TypeScript config
├── tailwind.config.js        # Tailwind CSS configuration
├── postcss.config.js         # PostCSS configuration
└── eslint.config.js          # ESLint configuration
```

## Key Features

- **Component Architecture**: Modular component structure for maintainability
- **TypeScript**: Full type safety with strict mode enabled
- **Tailwind CSS**: Modern utility-first CSS framework
- **ESLint**: Code quality and consistency checks
- **Vite**: Fast development server and optimized builds
- **React Three Fiber**: 3D visualizations and animations
- **Framer Motion**: Smooth animations and transitions
- **Code Splitting**: Optimized bundle size with vendor chunks

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# or
yarn install
```

### Development

```bash
# Start development server
npm run dev

# or
yarn dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
# Build for production
npm run build

# or
yarn build
```

The production build will be output to the `dist/` directory.

### Linting

```bash
# Run ESLint
npm run lint

# or
yarn lint
```

## Environment Variables

Create a `.env` file in the root directory (see `.env.example` for reference):

```env
GEMINI_API_KEY=your_api_key_here
```

## Refactoring Highlights

### Structure Improvements

- **Eliminated Duplication**: Removed duplicate `bactermfinder-landing/` directory
- **Standardized Entry Points**: Consistent `src/main.tsx` following Vite conventions
- **Component Organization**: Split 289-line `App.tsx` into focused, reusable components
- **Proper Directory Structure**: Organized code into logical folders (sections, ui, hooks, types)

### Code Quality

- **TypeScript Strict Mode**: Enabled for better type safety
- **ESLint Integration**: Added comprehensive linting rules for React and TypeScript
- **Code Splitting**: Vendor chunks for better performance
- **Path Aliases**: Clean imports with `@/*` syntax

### Configuration Merging

Combined the best features from both package versions:
- ESLint and related dev dependencies
- Updated TypeScript configuration with split approach
- Enhanced Vite config with build optimizations
- Added Tailwind CSS for modern styling

## Technology Stack

- **React 19.2.0**: Latest React with new features
- **TypeScript 5.9.3**: Type-safe development
- **Vite 7.2.4**: Fast build tool
- **Tailwind CSS 3.4.17**: Utility-first CSS framework
- **Three.js 0.181.2**: 3D graphics
- **React Three Fiber 9.4.2**: React renderer for Three.js
- **Framer Motion 12.23.25**: Animation library
- **Lucide React 0.555.0**: Icon library

## Performance

- **Code Splitting**: Vendor and three.js chunks separated
- **Tree Shaking**: Dead code elimination
- **Source Maps**: Enabled for debugging
- **Lazy Loading**: Dynamic imports for 3D components

## License

SPDX-License-Identifier: Apache-2.0

## Research Paper

Based on "BacTermFinder: A Comprehensive and General Bacterial Terminator Finder using a CNN Ensemble" by Ghahfarokhi & Peña-Castillo (2024).

For more information, visit: https://github.com/BioinformaticsLabAtMUN/BacTermFinder