# React TypeScript App with ESLint & Prettier

A modern React TypeScript application configured with ESLint and Prettier for code quality and consistent formatting.

## Features

- ⚛️ **React 19** with TypeScript
- 🏗️ **Vite** for fast development and building
- 🔧 **ESLint** for code linting with React and TypeScript rules
- 💅 **Prettier** for code formatting
- 🎯 **TypeScript** for type safety
- ⚙️ **VS Code** settings for seamless development

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check if code is formatted
- `npm run type-check` - Run TypeScript type checking
- `npm run preview` - Preview production build

## Configuration

### ESLint Configuration

The project uses ESLint with:

- TypeScript rules
- React hooks rules
- Prettier integration
- React refresh rules

### Prettier Configuration

The project uses Prettier with:

- Single quotes
- Semicolons
- 2-space indentation
- Trailing commas (ES5)
- Line width: 80 characters

### TypeScript Configuration

The project uses TypeScript with:

- Strict mode enabled
- React JSX support
- Modern ES2022 target
- Bundler module resolution

## VS Code Integration

The project includes VS Code settings for:

- Format on save
- ESLint auto-fix on save
- Prettier as default formatter
- TypeScript preferences

### Recommended Extensions

- ESLint
- Prettier - Code formatter
- TypeScript and JavaScript Language Features

## Project Structure

```
src/
├── App.tsx          # Main App component
├── main.tsx         # Application entry point
├── index.css        # Global styles
├── vite-env.d.ts    # Vite type definitions
└── assets/          # Static assets
```

## Code Quality

This project enforces code quality through:

- ESLint rules for TypeScript and React
- Prettier for consistent formatting
- TypeScript strict mode
- Pre-configured VS Code settings

## Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Ensure your code passes linting: `npm run lint`
2. Format your code: `npm run format`
3. Run type checking: `npm run type-check`
4. Test the build: `npm run build`
