module.exports = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-pxtorem')({
            rootValue: 14.4,
            minPixelValue: 2,
            propList: ['*'],
          })
        ]
      }
    }
  },
}