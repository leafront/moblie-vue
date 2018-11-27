'use strict';

const path = require('path');
const webpackDevConfig = require('./build/webpack.dev.config');
const merge = require('webpack-merge');

function resolve (dir) {
    return path.join(__dirname, dir)
}
const autoprefixer = require('autoprefixer');// rem
const pxtorem = require('postcss-pxtorem');  // rem

module.exports = merge(webpackDevConfig, {
    outputDir: '../docs',
    baseUrl: process.env.NODE_ENV === 'production' ? '/wm-mobile/' : '/',
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@$', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('layout',resolve('src/layout'))
            .set('base',resolve('src/base'))
            .set('static',resolve('src/static'))
    },
    css: {
        loaderOptions: {
            postcss: {
                plugins: [ // rem
                    autoprefixer(),
                    pxtorem({
                        rootValue: 12,
                        propList: [
                            '*',
                            '!line*',
                            '!border*'], // 对属性
                        selectorBlackList:['.van-'], // 对class
                        minPixelValue: 9,
                        unitPrecision: 3,
                    }),
                ]
            },
            less: {
                modifyVars: {
                    red: '#03a9f4',
                    blue: '#3eaf7c',
                    orange: '#f08d49',
                    'text-color': '#111'
                }
            }
        }
    }
});
