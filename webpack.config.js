const path = require("path");

module.exports = {
    entry: './node_js/module_libraries/func_library.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};