const path = require('path');

function createConfig(outputPath, includeExtraEntry) {
     return {
        entry: includeExtraEntry ? {
            entry0: './entry0',
            entry1: './entry1',
            entry2: './entry2'
        } : {
            entry0: './entry0',
            // no entry in the "middle"
            entry2: './entry2'
        },
        output: {
            path: path.resolve(__dirname, outputPath),
        },
        mode: 'production',
        optimization: {
            runtimeChunk: 'single'
        }
    };
}

module.exports = [
    createConfig('dist1', false),
    createConfig('dist2', true),
];
