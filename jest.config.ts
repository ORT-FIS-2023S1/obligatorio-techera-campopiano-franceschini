/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  transform: {
    "^.+\\.ts?$": "esbuild-jest",
  },
  clearMocks: true,
  collectCoverage: true,
  //collectCoverageFrom: ["./src/tests/**"],
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  //testMatch: ["**/src/tests/*.test.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "json", "ts"],
  roots: ["src"],
  coverageThreshold: {
    "global": {
      "branches": 50,
      "functions": 85,
      "lines": 85,
      "statements": 85
    },
  }
};
