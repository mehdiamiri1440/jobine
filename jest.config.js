const { defaults } = require('jest-config');

module.exports = {
  "bail": 1,
  "verbose": true,
  "moduleFileExtensions": [...defaults.moduleFileExtensions, 'ts', 'tsx'],
  "setupFilesAfterEnv": ["<rootDir>src/test/setup.js"]
}