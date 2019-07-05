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
        easing: 'ease', // 动画方式
        speed: 500, // 递增进度条的速度
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

5. 改变导航条的样式
```
#nprogress .bar{
    background: #29d;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
     width: 100%;
    height: 2px;
}
```

## Vue 将页面中表格数据导出excel

1. 需要安装3个依赖
```
npm install file-saver --save   // 保存文件用
npm install xlsx --save    // 转二进制用
npm install script-loader --save-dev    // xlsx核心文件

```

### ECharts
1. 安装
    `npm install echarts --save`

> 引入 
>
> import Echarts from 'echarts';
> Vue.prototype.echarts = Echarts
> Vue.use(Echarts)
2. 在绘图之前，需要为ECharts准备一个具备高度的dom容器
```
    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
    <div id="main" style="width: 600px;height:400px;"></div>
```
3. 通过echarts.init方法初始化一个echarts实力 并通过setOption方法生成一个简单的柱状图
```

<div id="main" style="width: 600px;height:400px;"></div>
    <script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    </script>
```