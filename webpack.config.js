const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const path = require('path');
const webpack = require('webpack');

const config = {
    entry:{
        app: "./assets/js/script.js",
        events: "./assets/js/events.js",
        schedule: "./assets/schedule.js",
        tickets: "./assets/tickets.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: __dirname + "/dist"
    },
    module: {
        rules: [
            {
                test: /\.jpg$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModules: false,
                            name (file) {
                                return "[path][name].[ext]"
                            },
                            publicPath: function(url) {
                                return url.replace("../", "/assets/")
                            }
                        }
                    },
                    {
                        loader: 'image-webpack-loader',
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: "static", // the report outputs to an HTML file in the dist folder
        })
    ],
    mode: 'development'
};

module.exports = config;