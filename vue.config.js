const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

module.exports = {
    // Other rules...
    configureWebpack: {
      plugins: [
        new NodePolyfillPlugin()
    ]
    }
}
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Calculator/" : "/",
};
