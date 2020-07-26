import json from 'rollup-plugin-json';
import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';
import svelte from 'rollup-plugin-svelte';
import livereload from 'rollup-plugin-livereload';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
import { terser } from 'rollup-plugin-terser';

const IS_PROD = !process.env.ROLLUP_WATCH;

export default [
  {
    input: './src/background.ts',
    output: {
      name: 'background',
      file: './dist/background.js',
      format: 'umd'
    },
    plugins: [
      json(),
      typescript({
        clean: IS_PROD,
        cacheRoot: './.cache',
        tsconfigOverride: IS_PROD
          ? {
              exclude: ['./src/tests']
            }
          : undefined
      }),
      commonjs(),
      resolve(),
      IS_PROD && uglify()
    ]
  },
  {
    input: 'client/index.js',
    output: {
      sourcemap: false,
      format: 'iife',
      name: 'app',
      file: 'dist/bundle.js'
    },
    plugins: [
      copy({
        targets: [{ src: 'client/index.html', dest: 'dist' }]
      }),
      svelte({
        dev: !IS_PROD,
        css: css => {
          css.write('dist/bundle.css', false);
        }
      }),
      resolve(),
      commonjs(),
      !IS_PROD && serve({ contentBase: ['dist'], port: 5000 }),
      !IS_PROD && livereload({ watch: 'dist' }),
      IS_PROD && terser()
    ]
  }
];
