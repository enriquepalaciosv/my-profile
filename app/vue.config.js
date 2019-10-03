var webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'VUE_APP_PROFILES_API_BASE_URL': JSON.stringify(process.env.VUE_APP_PROFILES_API_BASE_URL),
          'VUE_APP_DEFAULT_PROFILE_ID': JSON.stringify(process.env.VUE_APP_DEFAULT_PROFILE_ID)
        }
      })
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
            @import "@/assets/scss/_variables.scss";
          `
      }
    }
  }
};
