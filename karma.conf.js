module.exports = function (config) {
    config.set({
        frameworks: ["jasmine"],

        files: [
            { pattern: "src/**/*.test.tsx", watched: false }
        ],

        preprocessors: {
            "src/**/*.test.tsx": ["webpack"]
        },

        webpack: {
            mode: "development",
            resolve: {
                extensions: [".ts", ".tsx", ".js", ".jsx"]
            },
            module: {
                rules: [
                    {
                        test: /\.tsx?$/,
                        use: "ts-loader",
                        exclude: /node_modules/
                    }
                ]
            }
        },

        reporters: ["spec"],
        browsers: ["ChromeHeadless"],
        singleRun: true,
    });
};
