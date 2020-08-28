module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/main.scss"; '
      }
    }
  },

  publicPath: '/first-vue-app-todo/'
}