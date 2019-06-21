import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

let routes = [
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
    path: '/video1',
    name: 'video1',
    component: function () {
      return import('./components/video/index1.vue')
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
  },
  {
    path: '/fileType',
    name: 'fileType',
    component: function () {
      return import('./components/fileType/fileType.vue')
    }
  }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router
