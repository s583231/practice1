import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VideoPlayer from 'vue-video-player' // 视频组件
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VideoPlayer)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
