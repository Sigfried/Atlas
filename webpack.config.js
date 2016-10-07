"use strict";
module.exports = {
		target: 'web',
    context: __dirname + "/js",
    entry: "./main",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
		publicPath: "/",
}
