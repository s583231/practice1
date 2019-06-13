import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: function () {
        return import('./views/About.vue')
      }
    },
    {
      path: '/share',
      name: 'share',
      component: function () {
        return import('./components/share/index.vue')
      }
    },
    {
      path: '/video',
      name: 'video',
      component: function () {
        return import('./components/video/index.vue')
      }
    },
    {
      path: '/audio',
      name: 'audio',
      component: function () {
        return import('./components/audio/index.vue')
      }
    },
    {
      path: '/html',
      name: 'html',
      component: function () {
        return import('./components/html/index.vue')
      }
    },
    {
      path: '/qrcode',
      name: 'qrcode',
      component: function () {
        return import('./components/QRcode/index.vue')
      }
    },
    {
      path: '/filters',
      name: 'filters',
      component: function () {
        return import('./components/filter/filters.vue')
      }
    }
  ]
})
