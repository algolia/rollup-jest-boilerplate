import fs from 'fs';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import pkg from './package.json';
import babel from 'rollup-plugin-babel';

const extensions = [
  '.js', '.jsx', '.ts', '.tsx',
];

const firstMatch = baseFileName => extensions.reduce((acc, ex) => {
  const isMatch = fs.existsSync(baseFileName + ex);
  return isMatch ? [...acc, baseFileName + ex] : acc;
}, []).shift();

const input = firstMatch('src/main');

// TBD: use pkg.name => camel-case ?
const name = 'rollupJestBoilerplate';

export default {
  input,

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  // TBD extract from package deps?
  external: [],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ['src/**/*'], exclude: ['node_modules/**', '**/snapshots/**', `**/*.{test,spec}.{${extensions.join(',')}}`] }),
  ],

  output: [{
    file: pkg.main,
    format: 'cjs',
  }, {
    file: pkg.module,
    format: 'es',
  }, {
    file: pkg.browser,
    format: 'iife',
    name,

    // https://rollupjs.org/guide/en#output-globals-g-globals
    globals: {},
  }],
};
