module.exports =  {
  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // A map from regular expressions to paths to transformers
  transform: {
    '^.+\\.(ts|tsx|js|jsx)$': [
      'babel-jest',
      {
        presets: [['@babel/preset-env', { targets: { node: 'current' } }], ['@babel/preset-typescript']],
        plugins: ['@vue/babel-plugin-jsx'],
      },
    ],
  },
  transformIgnorePatterns: ['node_modules/?!(lodash-es)'],
  // The glob patterns Jest uses to detect test files
  testMatch: ['**/**/*.spec.(ts|tsx)'],

  // An array of file extensions your modules use
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'vue'],


  // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
  testPathIgnorePatterns: ['/node_modules/'],

  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy"
  },

  // The test environment that will be used for testing
  testEnvironment: 'jest-environment-jsdom',
  // setupFiles: ['<rootDir>/jest.setup.js'],
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
 },
};
