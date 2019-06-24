import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import router from './router'
import ElementUI from 'element-ui'
import * as filters from './filter/filters' // 过滤器
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player' // 视频组件
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(VideoPlayer)
Vue.use(ElementUI)
Vue.use(Vuex)


Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) {
    return h(App)
  }
}).$mount('#app')
