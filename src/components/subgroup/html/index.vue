<template>
  <!-- 加载整个html页面 -->
  <div id="page">
  </div>
</template>

<script>
export default {
  name: 'page',
  props: {
  },
  data () {
    return {
      return_html: ''
    }
  },
  mounted () {
    this.hymlstr()
  },
  methods: {
    // 获取到html字符串
    hymlstr () {
      let htmlcode = `
        <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
          </head>
          <body>
            <span>测试html页面</span>
          </body>
        </html>
      `
      document.getElementById('page').innerHTML = htmlcode
      // let data = {
      // }
      // payApi.getPcHtml(data).then(res=> {
      //   this.return_html = res
      //   document.getElementById('page').innerHTML = res
      //   this.$nextTick(() => {
      //     document.forms[0].submit()
      //   })
      // })
    }
  }
}
</script>
