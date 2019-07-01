# practice

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

# 组件(compoments)

## 导航栏

`Navbar`

## js 分享到 qq，微信，微博

`share`

## 视频组件

`video`
`vue-video-player`
`https://github.com/surmon-china/vue-video-player`

## 音频

`audio`

## 加载 html 的整个页面

`html`

## 分页

`page`

## 图片裁剪

`picTailor`

## 文件上传

`upload`

## 生成二维码

`QRcode`

## 路由跳转时，浏览器窗口上方的进度条显示

1. 安装

`npm install --save nprogress`

2. 在router.js中进入
```
    import NProgress from 'nprogress'

    import 'nprogress/nprogress.css'
```
    
3. 在router.js中配置
```
    NProgress.configure({     
        easing: 'ease',  // 动画方式    
        speed: 500,  // 递增进度条的速度    
        showSpinner: false, // 是否显示加载ico    
        trickleSpeed: 200, // 自动递增间隔    
        minimum: 0.3 // 初始化时的最小百分比
     })
```

4. 在router.js中对路由钩子进行设置：
```
     //当路由进入前
     router.beforeEach((to, from , next) => {
         // 每次切换页面时，调用进度条
        NProgress.start();
        // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
         next();
     });
    //当路由进入后：关闭进度条
    router.afterEach(() => {  
        // 在即将进入新的页面组件前，关闭掉进度条
        NProgress.done()
    })
```
