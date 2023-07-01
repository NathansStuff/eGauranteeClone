const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  verbose: true,
  // Adds what's in this file to the top of every file in the test suite
  setupFilesAfterEnv: ['./src/utils/testUtils/setupTests.ts'],
  collectCoverage: true,
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverageFrom: [
    // Included
    'src/**/*.{js,jsx,ts,tsx}',
    // Excluded
    '!src/**/*.d.ts', // No need to test type definitions
    '!src/**/*.mocks.{js,jsx,ts,tsx}', // No need to test mocks
    '!src/**/index.{js,jsx,ts,tsx}', // index files should only export other files
  ],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100,
    },
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
