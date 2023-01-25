const project = require('./project.json');

module.exports = {
  collectCoverageFrom: project.source.tests.files,
  coverageReporters: ['html', 'text-summary'],
  coverageThreshold: {
    global: {
      statements: 100,
      branches: 100,
      functions: 100,
      lines: 100
    }
  },
  moduleNameMapper: {
    '@src\/(.*)$': `<rootDir>/${project.source.root}/$1`,
    '^uuid$': `<rootDir>/node_modules/uuid/dist/commonjs-browser/v4.js`
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js'
  ],
  transform: {
    '^.+\\.js$': 'babel-jest'
  }
};
