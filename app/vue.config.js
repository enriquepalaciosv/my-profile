var webpack = require('webpack')

module.exports = {
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
