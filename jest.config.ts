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
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testMatch: ["**/tests/**/*.test.ts"],
  moduleDirectories: ["node_modules", "src"],
  moduleFileExtensions: ["js", "json", "ts"],
  roots: ["src"],
  moduleNameMapper: {
    "@interface/(.*)": "<rootDir>/src/interface/$1",
    "@domain/(.*)": "<rootDir>/src/domain/$1",
    "@routes/(.*)": "<rootDir>/src/routes/$1",
    "@public/(.*)": "<rootDir>/src/public/$1",
  },
};
