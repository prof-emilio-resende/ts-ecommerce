# TypeScript E-Commerce Project

A learning project to build an e-commerce application using TypeScript.

## Change Log

### Pending Changes

- [ ] Initial project setup
  - [ ] Initialize npm/package.json
  - [ ] Configure TypeScript (tsconfig.json)
  - [ ] Set up project structure

- [ ] Core Features
  - [ ] Product catalog
  - [ ] Shopping cart
  - [ ] User authentication
  - [ ] Checkout process
  - [ ] Payment integration

- [ ] Database
  - [ ] Database setup
  - [ ] Product models
  - [ ] User models
  - [ ] Order models

- [ ] API Development
  - [ ] REST API endpoints
  - [ ] Authentication middleware
  - [ ] Error handling

- [ ] Frontend (if applicable)
  - [ ] UI framework setup
  - [ ] Product listing page
  - [ ] Product detail page
  - [ ] Cart page
  - [ ] Checkout page

- [ ] Testing
  - [ ] Unit tests
  - [ ] Integration tests

- [ ] Documentation
  - [ ] API documentation
  - [ ] Setup instructions

### Completed Changes

_Changes will be logged here as they are completed._

---

## Progress Steps

Detailed steps taken to build this project:

### Step 1: Project Initialization
- Initialize Node.js project with `npm init -y`
- Install TypeScript dependencies:
  - `npm install --save-dev typescript @types/node`
  - `npm install --save-dev ts-node nodemon`
- Configure TypeScript with `npx tsc --init`
- Set up basic project structure

**Sample `tsconfig.json`:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "lib": ["ES2020"],
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "moduleResolution": "node"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.test.ts"]
}
```

**Sample `package.json` scripts:**
```json
{
  "scripts": {
    "dev": "nodemon --exec ts-node src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js"
  }
}
```

### Step 2: VSCode Debug Configuration
- Create `.vscode/launch.json` for debugging TypeScript files
- Configure debug settings to work with ts-node
- Set up breakpoints and debug environment

**Sample `.vscode/launch.json`:**
```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Debug TypeScript",
      "runtimeArgs": ["-r", "ts-node/register"],
      "args": ["${workspaceFolder}/src/index.ts"],
      "cwd": "${workspaceFolder}",
      "protocol": "inspector",
      "internalConsoleOptions": "openOnSessionStart",
      "env": {
        "TS_NODE_PROJECT": "${workspaceFolder}/tsconfig.json"
      },
      "skipFiles": ["<node_internals>/**"]
    },
    {
      "type": "node",
      "request": "launch",
      "name": "Debug Jest Tests",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand", "--no-cache"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

### Step 3: Jest Testing Configuration
- Install Jest and TypeScript support:
  - `npm install --save-dev jest @types/jest ts-jest`
- Initialize Jest configuration: `npx ts-jest config:init`
- Create `jest.config.js` with TypeScript preset
- Add test scripts to `package.json`:
  - `"test": "jest"`
  - `"test:watch": "jest --watch"`
  - `"test:coverage": "jest --coverage"`
- Set up test directory structure

**Sample `jest.config.js`:**
```javascript
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: ['<rootDir>/src'],
  testMatch: ['**/__tests__/**/*.ts', '**/?(*.)+(spec|test).ts'],
  collectCoverageFrom: [
    'src/**/*.ts',
    '!src/**/*.d.ts',
    '!src/**/*.test.ts',
    '!src/**/__tests__/**'
  ],
  coverageDirectory: 'coverage',
  coverageReporters: ['text', 'lcov', 'html'],
  moduleFileExtensions: ['ts', 'js', 'json'],
  verbose: true
};
```

**Sample test file `src/__tests__/example.test.ts`:**
```typescript
describe('Example Test Suite', () => {
  it('should pass a simple test', () => {
    expect(true).toBe(true);
  });

  it('should perform basic arithmetic', () => {
    expect(2 + 2).toBe(4);
  });
});
```

---

## Notes

Use this section to track decisions, challenges, or important learnings during development.
