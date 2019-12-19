const extensions = [
  'js', 'jsx', 'ts', 'tsx',
];

module.exports = {
  "roots": [
    "<rootDir>/src"
  ],
  testMatch: [
    `**/__tests__/**/*.+(${extensions.join('|')})`,
    `**/?(*.)+(spec|test).+(${extensions.join('|')})`
  ],
  "transform": {
    [ `^.+\\.(${extensions.join('|')})$` ]: "ts-jest"
  },
}
