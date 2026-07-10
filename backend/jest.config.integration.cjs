'use strict';

/** @type {import('jest').Config} */
module.exports = {
  moduleFileExtensions: ['js', 'json', 'ts'],
  rootDir: 'src',
  testRegex: '.*\\.integration\\.spec\\.ts$',
  extensionsToTreatAsEsm: ['.ts'],
  resolver: '<rootDir>/../jest-resolver.cjs',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { useESM: true }],
  },
  testEnvironment: 'node',
  testTimeout: 30000,
};
