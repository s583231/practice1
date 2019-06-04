<template>
  <!-- 二维码 -->
  <div class="qrcode">
    <el-button @click="showcode">code</el-button>
    <canvas id="qrccode-canvas"></canvas>
  </div>
</template>

<script>
// 安装qrcode 引入
import QRCode from 'qrcode'
export default {
  name: 'qrcode',
  props: {
  },
  data () {
    return {
      canvas: ''
    }
  },
  created () {
    this.$nextTick (function () {
      // DOM操作
      this.canvas = document.getElementById('qrccode-canvas')
    })
  },
  mounted () {
  },
  methods: {
    showcode () {
      this.qrcode('http://www.baidu.com')
    },
    qrcode (url) {
      console.log(this.canvas)
      // 生成二维码
      QRCode.toCanvas(this.canvas, url, error => {
        if (error) {
          console.log(error)
        } else {
          console.log('success')
        }
      })
    }
  }
}
</script>

<style scoped>
</style>
