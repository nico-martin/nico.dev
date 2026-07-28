# React SPA Project Setup

This guide covers the initial scaffolding and configuration for a new React SPA project. For ongoing development patterns, see the main [SKILL.md](./SKILL.md).

## Gathering Project Information

Before scaffolding, gather the following information from the user:

- **Project name** - Used for `package.json` name field (kebab-case format)
- **Project description** (optional) - Used for `package.json` description field
- **Port number** (optional) - Default is 5173 (Vite default)
- **Version** - Always start with `0.0.1`

**Example interaction:**

```
Agent: I'll set up a React SPA project for you. What would you like to name the project?
User: my-awesome-app
Agent: Great! Would you like to add a description for the package.json?
User: A demo application showcasing React best practices
```

**Defaults if user doesn't provide information:**

- Name: Use current directory name in kebab-case
- Description: "A React SPA application"
- Version: Always `0.0.1`

## Tech Stack

Always use the **latest versions** of these dependencies:

### Core Dependencies

- **react** - UI framework
- **react-dom** - React DOM renderer
- **lucide-react** - Icon components

### Dev Dependencies

- **@types/react** - React TypeScript definitions
- **@types/react-dom** - React DOM TypeScript definitions
- **@vitejs/plugin-react** - Fast Refresh support
- **@tailwindcss/vite** - Tailwind Vite plugin
- **tailwindcss** - CSS framework (v4+)
- **typescript** - Type checking
- **vite** - Build tool and dev server
- **eslint** - Code linting
- **@typescript-eslint/eslint-plugin** - TypeScript linting rules
- **@typescript-eslint/parser** - TypeScript ESLint parser
- **eslint-plugin-react-hooks** - React hooks linting
- **eslint-plugin-react-refresh** - React Refresh linting
- **prettier** - Code formatting
- **@trivago/prettier-plugin-sort-imports** - Auto-sort imports

## Project Structure

Create the following directory structure:

```
project-root/
├── src/
│   ├── components/          # App-specific components
│   ├── theme/
│   │   └── index.ts        # Central theme export
│   ├── utils/
│   │   └── classnames.ts   # CN utility
│   ├── App.tsx             # Root component
│   ├── index.css           # Tailwind theme
│   ├── main.tsx            # React entry
│   └── vite-env.d.ts       # Vite types
├── public/                  # Static assets
├── index.html              # HTML entry point
├── package.json
├── tsconfig.json           # Base TypeScript config
├── tsconfig.app.json       # App TypeScript config
├── tsconfig.node.json      # Node TypeScript config
├── vite.config.ts          # Vite configuration
├── .prettierrc             # Prettier config
├── .prettierignore         # Prettier ignore
├── .gitignore              # Git ignore
└── eslint.config.js        # ESLint config
```

## Configuration Files

### package.json

```json
{
  "name": "project-name",
  "version": "0.0.1",
  "description": "Project description",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview",
    "lint": "eslint .",
    "format": "prettier --write \"src/**/*.{ts,tsx,css}\""
  },
  "dependencies": {
    "react": "latest",
    "react-dom": "latest",
    "lucide-react": "latest"
  },
  "devDependencies": {
    "@types/react": "latest",
    "@types/react-dom": "latest",
    "@vitejs/plugin-react": "latest",
    "@tailwindcss/vite": "latest",
    "tailwindcss": "latest",
    "typescript": "latest",
    "vite": "latest",
    "eslint": "latest",
    "@typescript-eslint/eslint-plugin": "latest",
    "@typescript-eslint/parser": "latest",
    "eslint-plugin-react-hooks": "latest",
    "eslint-plugin-react-refresh": "latest",
    "prettier": "latest",
    "@trivago/prettier-plugin-sort-imports": "latest"
  }
}
```

### vite.config.ts

```typescript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

### tsconfig.json

```json
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
```

### tsconfig.app.json

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### tsconfig.node.json

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ES2023"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "noEmit": true
  },
  "include": ["vite.config.ts"]
}
```

### .prettierrc

```json
{
  "singleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 80,
  "arrowParens": "always",
  "importOrder": ["<THIRD_PARTY_MODULES>", "^[./]"],
  "plugins": ["@trivago/prettier-plugin-sort-imports"]
}
```

### .prettierignore

```
node_modules
dist
build
coverage
.idea
*.log
package-lock.json
```

### .gitignore

```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

### eslint.config.js

```javascript
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
```

## Initial Source Files

### index.html

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Project Name</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### src/main.tsx

```tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
```

### src/App.tsx

```tsx
export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">Hello React SPA</h1>
    </div>
  );
}
```

### src/index.css

```css
@import "tailwindcss";

@theme {
  /* custom theme configuration if needed */
}
```

### src/vite-env.d.ts

```typescript
/// <reference types="vite/client" />
```

### src/utils/classnames.ts

```typescript
const cn = (...classes: Array<Record<string, boolean> | string>): string =>
  classes
    .map((entry) =>
      typeof entry === "string"
        ? entry
        : Object.entries(entry || {})
            .filter(([, append]) => append)
            .map(([cl]) => cl)
            .join(" "),
    )
    .filter((e) => e !== "")
    .join(" ");

export default cn;
```

### src/theme/index.ts

```typescript
// Export theme components here
// Example: export { default as Button } from "./button/Button";
```

## Installation Steps

After creating all files:

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start development server:

   ```bash
   npm run dev
   ```

3. Verify the app runs at `http://localhost:5173` (or specified port)

## Next Steps

Once the project is scaffolded, refer to [SKILL.md](./SKILL.md) for:

- Component organization patterns
- TypeScript guidelines
- React patterns
- Code style conventions
- Performance best practices
