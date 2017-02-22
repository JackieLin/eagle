/**
 * rollup dev config
 * @author jackieLin <dashi_lin@163.com>
 */
'use strict';

const rollup = require('rollup')
const path = require('path')
const nodeResolve = require('rollup-plugin-node-resolve')
const coffee = require('rollup-plugin-coffee-script')
const commonjs = require('rollup-plugin-commonjs')
const nodeGlobals = require('rollup-plugin-node-globals')
const builtins = require('rollup-plugin-node-builtins')

module.exports = {
    entry: path.resolve(__dirname, '..', 'src/index.coffee'),
    format: 'umd',
    moduleName: 'Eagle',
    dest: path.resolve(__dirname, '..', 'dist', 'eagle.js'),
    plugins: [
        coffee(),
        nodeResolve({
            extensions: ['.js', '.coffee'],
            preferBuiltins: false
        }),
        commonjs({
            include: ['node_modules/**', 'src/**'],
            extensions: ['.js', '.coffee']
        }),
        nodeGlobals(),
        builtins()
    ]
}
