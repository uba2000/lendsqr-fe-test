export default {
  // testEnvironment: 'jsdom',
  // transform: {
  //   '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  //   '^.+\\.scss$': 'identity-obj-proxy',
  // },
  // moduleNameMapper: {
  //   '\\.(css|scss)$': 'identity-obj-proxy',
  //   '^@/(.*)$': '<rootDir>/src/$1',
  // },
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  // testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  // moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],

  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/setup-test.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.svg\\?react$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(jpg|jpeg|png|gif|webp|svg)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg\\?react$': 'jest-transformer-svg',
  },
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/**/*.{spec,test}.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/dist/**',
    '!**/build/**',
    '!vite.config.ts',
    '!**/coverage/**',
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'setup-tests.ts',
    'vite-env.d.ts',
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    // '^.+\\.svg$': 'jest-transformer-svg',
    // '^.+\\.scss$': 'identity-obj-proxy',
  },
};
