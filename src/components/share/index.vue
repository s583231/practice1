<template>
  <!-- 页面分享 -->
  <div class="share">
    <span>js实现分享到qq,微信,微博</span>
    <div class='iconh'>
      <div>
        <img src="../../assets/images/share/qq2.png" alt="" @click='shareQQ(1,2,3)'>
      </div>
      <div>
        <img src="../../assets/images/share/qqzone.png" alt="" @click='shareQQZone(1,2,3)'>
      </div>
      <div>
        <img src="../../assets/images/share/wx.png" alt="" @click='shareWX()'>
      </div>
      <div>
        <img src="../../assets/images/share/wb1.png" alt="" @click='shareWB(1,2,3)'>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
  },
  methods: {
    // QQ好友分享
    // QQ分享的的url 如果是localhost是不行的
    shareQQ (title, url, pic) {
      let param = {
        url: 'http://localhost:8080/#/share', // 获取URL，可加上来自分享到QQ标识，方便统计
        desc: '测试', // 分享理由(风格应模拟用户对话),支持多分享语随机展现（使用|分隔）
        title: title, // 分享标题(可选)
        summary: title, // 分享描述(可选)
        pics: pic, // 分享图片(可选)
        flash: '', // 视频地址(可选)*/
        // commonClient : true,  // 客户端嵌入标志
        site: '测试' // 分享来源 (可选) ，如：QQ分享
      }
      let s = []
      for (let i in param) {
        s.push(i + '=' + encodeURIComponent(param[i] || ''))
      }
      let targetUrl = `http://connect.qq.com/widget/shareqq/iframe_index.html?` + s.join('&')
      window.open(targetUrl, 'qq',
        'height=520, width=720')
    },

    // QQ空间分享
    shareQQZone (title, pic) {
      let param = {
        url: 'http://localhost:8080/#/share',
        showcount: '1', // 是否显示分享总数,显示：'1'，不显示：'0'
        desc: '这篇文章不错,分享一下~~', // 默认分享理由(可选)
        summary: '', // 分享摘要(可选)
        title: title, // 分享标题(可选)
        site: '汽车氪', // 分享来源 如：腾讯网(可选)summary
        pics: pic, // 分享图片的路径(可选)
        style: '101',
        width: 199,
        height: 30
      }
      let s = []
      for (let i in param) {
        s.push(i + '=' + encodeURIComponent(param[i] || ''))
      }
      let targetUrl = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?` + s.join('&')
      window.open(targetUrl, 'qZone', 'height=430, width=400')
    },
    // 微信分享
    // 微信分享需要手机扫描二维码，需要对url进行编码。在https协议下，扫描二维码时，浏览器打不开可能时安全证书导致的
    shareWX () {
      // let url = window.location.href
      // 如果不加encodeURIComponent，可能会出现分享页面到不了具体页面
      // let encodePath = encodeURIComponent(url)
      let encodePath = encodeURIComponent(`http://114.116.117.201/#/development/developTrainDetail?type=4&id=47&navtitle=%E6%95%99%E5%B8%88%E5%8F%91%E5%B1%95-%E6%95%99%E5%B8%88%E5%AD%A6%E9%99%A2&navtitle=%E8%AF%A6%E6%83%85`)
      let targetUrl = 'http://qr.liantu.com/api.php?text=' + encodePath
      window.open(targetUrl, 'weixin', 'height=320, width=320')
    },
    // 分享新浪微博
    shareWB (title, url, pic) {
      var param = {
        url: url || window.location.href,
        type: '3',
        count: '1', // 是否显示分享数，1显示(可选)
        appkey: '', // 您申请的应用appkey,显示分享来源(可选)
        title: '', // 分享的文字内容(可选，默认为所在页面的title)
        pic: pic || '', // 分享图片的路径(可选)
        ralateUid: '', // 关联用户的UID，分享微博会@该用户(可选)
        rnd: new Date().valueOf()
      }
      var temp = []
      for (var p in param) {
        temp.push(p + '=' + encodeURIComponent(param[p] || ''))
      }
      var targetUrl = 'http://service.weibo.com/share/share.php?' + temp.join('&')
      window.open(targetUrl, 'sinaweibo', 'height=430, width=400')
    }
  }
}
</script>

<style scoped>
.iconh div{
  display:inline-block
}
.iconh img{
  height:40px;
  margin-right:10px;
}
</style>
