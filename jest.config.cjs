const { pathsToModuleNameMapper } = require("ts-jest");

// In the following statement, replace `./tsconfig` with the path to your `tsconfig` file
// which contains the path mapping (ie the `compilerOptions.paths` option):

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  roots: ["<rootDir>/src"],
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  setupFilesAfterEnv: ["<rootDir>/setupTests.ts"],
  modulePaths: ["."], // <-- This will be set to 'baseUrl' value
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
    ...pathsToModuleNameMapper(
      {
        "$src/*": ["src/*"],
        "$components/*": ["src/components/*"],
        "$types/*": ["src/types/*"],
        "$api/*": ["src/pages/api/*"],
        "$models/*": ["src/models/*"],
        "$hooks/*": ["src/hooks/*"],
      },
      { prefix: "<rootDir>/" }
    ),
  },
};
