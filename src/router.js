import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/home.vue'
// import Home from './views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)
NProgress.configure({
  easing: 'ease', // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3 // 初始化时的最小百分比
})
let routes = [
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('./views/login/login.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('./views/login/register.vue')
    }
  },
  {
    path: '/chart/line',
    name: 'chartline',
    component: function () {
      return import('./views/charts/line.vue')
    }
  },
  {
    path: '/forgetPassword',
    name: 'forgetPassword',
    component: function () {
      return import('./views/login/forgetPassword.vue')
    }
  },
  {
    path: '/subgroup/barCrode',
    name: 'barCrode',
    component: function () {
      return import('./components/subgroup/barCrode/index.vue')
    },
    meta: {
      title: '条形码'
    }
  },
  {
    path: '/',
    name: 'home',
    component: Home,
    children: [
      {
        path: '/index',
        name: 'index',
        component: function () {
          return import('./views/home/index.vue')
        },
        meta: {
          title: '首页'
        }
      },
      {
        path: '/subgroup/router/:id',
        name: 'router',
        component: function () {
          return import('./components/subgroup/router/router.vue')
        },
        meta: {
          title: '路由'
        }
      },
      {
        path: '/subgroup/share',
        name: 'share',
        component: function () {
          return import('./components/subgroup/share/index.vue')
        },
        meta: {
          title: '分享'
        }
      },
      {
        path: '/subgroup/video',
        name: 'video',
        component: function () {
          return import('./components/subgroup/video/index.vue')
        },
        meta: {
          title: '视频'
        }
      },
      {
        path: '/subgroup/video1',
        name: 'video1',
        component: function () {
          return import('./components/subgroup/video/index1.vue')
        },
        meta: {
          title: '视频'
        }
      },
      {
        path: '/subgroup/audio',
        name: 'audio',
        component: function () {
          return import('./components/subgroup/audio/index.vue')
        },
        meta: {
          title: '音频'
        }
      },
      {
        path: '/subgroup/html',
        name: 'html',
        component: function () {
          return import('./components/subgroup/html/index.vue')
        },
        meta: {
          title: 'html'
        }
      },
      {
        path: '/subgroup/qrcode',
        name: 'qrcode',
        component: function () {
          return import('./components/subgroup/QRcode/index.vue')
        },
        meta: {
          title: '二维码'
        }
      },
      // {
      //   path: '/subgroup/barCrode',
      //   name: 'barCrode',
      //   component: function () {
      //     return import('./components/subgroup/barCrode/index.vue')
      //   },
      //   meta: {
      //     title: '条形码'
      //   }
      // },
      {
        path: '/subgroup/filters',
        name: 'filters',
        component: function () {
          return import('./components/subgroup/filter/filters.vue')
        },
        meta: {
          title: '过滤器'
        }
      },
      {
        path: '/subgroup/fileType',
        name: 'fileType',
        component: function () {
          return import('./components/subgroup/fileType/fileType.vue')
        },
        meta: {
          title: '识别文件类型'
        }
      },
      {
        path: '/subgroup/upload',
        name: 'upload',
        component: function () {
          return import('./components/subgroup/upload/index.vue')
        },
        meta: {
          title: '头像上传'
        }
      },
      {
        path: '/subgroup/backTop',
        name: 'backTop',
        component: function () {
          return import('./components/subgroup/backTop/index.vue')
        },
        meta: {
          title: '返回顶部按钮'
        }
      },
      {
        path: '/subgroup/dialog',
        name: 'dialog',
        component: function () {
          return import('./components/subgroup/dialog/index.vue')
        },
        meta: {
          title: '弹框'
        }
      }
    ]
  }
]

const router = new Router({
  mode: 'history',
  routes
})

// 重定向列表
// const whiteList = [
//   'index'
// ]
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start()
  // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
  next()
  // 设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
  // if (!sessionStorage.token) {
  //   next(`/login?redirect=${to.path}`)
  // }
  // // 登录重定向
  // if (store.getters.isLogin) {
  //   if (to.path === '/login') {
  //     next({
  //       path: '/'
  //     })
  //   } else {
  //     next()
  //   }
  // } else {
  //   if (whiteList.indexOf(to.path) !== -1) {
  //     next()
  //   } else {
  //     next(`/login?redirect=${to.path}`) // 否则全部重定向到登录页
  //   }
  // }
})
// 当路由进入后：关闭进度条
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done()
})
export default router
