module.exports = [
    {
        entry: '.\\V2\\main.ts',
        output: {
            filename: 'v2.min.js',
            libraryExport: 'default',
            path: __dirname,
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        target: 'node',
        devtool: 'source-map',
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                },
            ],
        },
    },
];
