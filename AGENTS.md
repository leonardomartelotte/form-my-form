# Agent Guide

## Project overview

`form-my-form` is a React 19 form component library. The reusable component and public TypeScript API live in `src/lib/`; `src/App.tsx` is the local demo. Vite builds the library and demo, and TypeScript emits the package declarations.

## Development commands

- `npm run dev` starts the Vite demo.
- `npm test` runs the Vitest suite once.
- `npm run typecheck` checks the application, library, and tests.
- `npm run build` type-checks and builds the library and demo.

## Implementation guidance

- Write all source code, comments, documentation, and user-facing strings in English.
- Use TypeScript and React function components. Keep public component and configuration types exported from `src/lib/index.ts`.
- Add or update tests when changing validation, field interactions, submission data, or color behavior.
- Keep the library stylesheet in `src/lib/index.css`. Consumers import the published stylesheet separately with `import "form-my-form/style.css"`.
- Keep `FormColors`, the component's CSS custom properties, the examples, and README color reference aligned when changing theme tokens.
- Treat field `kind` as a discriminant and validate form data without evaluating strings or constructing executable code.
- Use `npm run build` to validate both the package output and the demo before considering a change complete.

## Package boundaries

- React is a peer dependency; do not bundle React in the published library.
- Only `dist/` and `README.md` are included in the npm package.
- The package exports ESM, CommonJS, TypeScript declarations, and `./style.css`.
