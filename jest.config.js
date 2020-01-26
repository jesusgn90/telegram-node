
module.exports = {
  globals: {
    'ts-jest': {
      'tsConfig': 'tsconfig.json',
    },
  },

  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
  ],

  // A map from regular expressions to module names that allow to stub out resources with a single module
  moduleNameMapper: {
    '@/(.*)': '<rootDir>/src/$1',
  },

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
}
