const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/** @type {import('webpack').Configuration} */
module.exports = (env, argv) => {
    const isProd = argv.mode === "production";

    return {
        mode: argv.mode || "development",
        entry: "./src/index.tsx",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: isProd ? "[name].[contenthash].js" : "[name].js",
            clean: true,
            publicPath: "/",
        },
        resolve: {
            extensions: [".tsx", ".ts", ".js"],
            alias: {
                "@": path.resolve(__dirname, "src"),
            },
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "ts-loader",
                        options: { transpileOnly: true },
                    },
                },
                {
                    test: /\.css$/i,
                    use: ["style-loader", "css-loader", "postcss-loader"],
                },
            ],
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html",
            }),
        ],
        devServer: {
            port: 3000,
            hot: true,
            historyApiFallback: true,
        },
        devtool: isProd ? "source-map" : "eval-cheap-module-source-map",
        performance: {
            hints: false,
        },
    };
};
