import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  maxWorkers: '50%',
  moduleDirectories: ['node_modules', 'src', 'test'],
  moduleNameMapper: {
    '\\.(css|ttf|ico|png|svg|jpg)$': require.resolve('./test/emptyModule.ts'),
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom/jest-globals'],
  snapshotSerializers: ['@emotion/jest/serializer'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.(tsx|ts)'],
  transform: {
    '.*\\.(tsx?|jsx?)$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: true,
          },
          transform: {
            react: {
              runtime: 'automatic',
              importSource: '@emotion/react',
            },
          },
        },
      },
    ],
  },
};

export default config;
