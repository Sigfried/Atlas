// from https://github.com/yamafaktory/babel-react-rollup-starter
import babel from 'rollup-plugin-babel'
import cjs from 'rollup-plugin-commonjs'
import globals from 'rollup-plugin-node-globals'
import replace from 'rollup-plugin-replace'
import resolve from 'rollup-plugin-node-resolve'
// import path from 'path'

export default {
  input: 'js/rollup/src/rollup-hook.js',
  output: {
    file: 'js/rollup/build/main.js',
    // format: 'iife',
    format: 'umd',
    name: 'rolluphook'
  },
  /*
  external: [
    'vocab', path.resolve('js/reactFiles/vocab.js')
  ],
  */
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ [ 'env', { modules: false } ], 'stage-0', 'react' ],
      plugins: [ 'external-helpers' ]
    }),
    cjs({
      exclude: 'node_modules/process-es6/**',
      include: [
        'node_modules/create-react-class/**',
        'node_modules/fbjs/**',
        'node_modules/object-assign/**',
        'node_modules/react/**',
        'node_modules/react-dom/**',
        'node_modules/prop-types/**'
      ]
    }),
    globals(),
    replace({ 'process.env.NODE_ENV': JSON.stringify('development') }),
    resolve({
      // module: false,
      // browser: true,
      // main: true
    })
  ],
  sourcemap: true
}
