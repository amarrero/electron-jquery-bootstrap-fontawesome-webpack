const webpack = require("webpack");

const rules = require("./webpack.rules");

rules.push(
  {
    test: /\.(scss)$/,
    use: [
      {
        // Inject CSS to page
        loader: "style-loader",
      },
      {
        // Translate CSS into CommonJS modules
        loader: "css-loader",
      },
      {
        // Run postcss actions
        loader: "postcss-loader",
        options: {
          // This is needed for postcss 8.x;
          postcssOptions: {
            // postcss plugins, can be exported to postcss.config.js
            plugins: function () {
              return [
                require("autoprefixer"),
              ];
            },
          },
        },
      },
      {
        // Compile Sass to CSS
        loader: "sass-loader",
      },
    ],
  },
  {
    test: /\.(png|jpe?g|gif|ico|svg)$/,
    use: [
      {
        loader: "file-loader",
      },
    ],
  },
);

module.exports = {
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
    }),
  ],
};
