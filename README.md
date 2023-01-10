# Node Typescript Boilerplate

## What's inside

- [Typescript](https://www.typescriptlang.org/)
- [Prettier](https://prettier.io/docs/en/index.html)
- [ESLint](https://typescript-eslint.io/)
- [VS Code launch script](https://code.visualstudio.com/docs/typescript/typescript-debugging)
- [lint-staged](https://www.npmjs.com/package/lint-staged)
- [husky](https://www.npmjs.com/package/husky)

### Typescript

Targeting Node 18 as a target runtime as it's the latest LTS version at the time of writing and both AWS as well as Vercel support it now.

### Prettier

Used for automatic formatting. Can be run manually via hotkey in VS Code. Is run automatically before git commits (with husky and lint-staged).

### ESLint

Advanced linting to prevent common errors.

### VS Code launch script

Useful for easily running the debugger. Automatically loads environment variables from the `.env` file.
