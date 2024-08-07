import typescript from '@rollup/plugin-typescript'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

import html from '@rollup/plugin-html'
import copy from 'rollup-plugin-copy'
import livereload from 'rollup-plugin-livereload'
import serve from 'rollup-plugin-serve'

const port = 10101 // visit http://localhost:10101

export default  {
        input: 'index.ts',
        output: {
            sourcemap: true,
            file: 'dist/bundle.js',
            format: 'esm'
        },
        watch: {  exclude: ['node_modules/**']  },
        plugins: [
            nodeResolve({
                browser: true,
                preferBuiltins: false,
            }),
            typescript({ 
                tsconfig: './tsconfig.json' 
            }),
            commonjs(),
            html({
                title: "LeaferJS",
                meta: [{charset: 'utf-8'}, {name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no'}]
            }),
            copy({ targets: [{ src: 'public/*', dest: 'dist/' }]}),
            livereload(),
            serve({contentBase: ['dist/'],  port})
        ]
    }