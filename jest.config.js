module.exports = {
  // kind of environment that we will work in, we work on DOM
  testEnvironment: 'jsdom',
  // ignore paths
  testPathIgnorePatterns: ['/node_modules/', './next/'],
  // test all and next  is where run all tests
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  // rund before all tests
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
