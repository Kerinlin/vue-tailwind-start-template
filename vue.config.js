module.exports = {
  configureWebpack: {
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /node_modules/,
          options: {
            fix: true,
            cache: false,
            failOnError: false,
          },
        },
      ],
    },
  },
  // css: {
  //   loaderOptions: {
  //     postcss: {
  //       plugins: [
  //         require("postcss-pxtorem")({
  //           rootValue: 14.4,
  //           minPixelValue: 2,
  //           propList: ["*"],
  //         })
  //       ],
  //     },
  //   },
  // },
};
