import bubel from 'rollup-plugin-babel'

export default {
    input: 'src/main.js',
    output: {
        dir: 'out',
        format: 'cjs', // required

    },
    plugins: [bubel({
        exclude: 'node_modules/**',
        babelrc: false,
        presets: [
            ["@babel/env", {
                    modules: false, // If you are intended to set modules as false, namely we want to support es6 module, then you must set loose as true
                }
            ]
        ],
/*
        presets: [
            ["@babel/preset-env", {
                loose: true,
                modules: false, // If you are intended to set modules as false, namely we want to support es6 module, then you must set loose as true
            }
            ]
        ]*/
    })]
}