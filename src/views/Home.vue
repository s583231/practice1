<template>
  <div class="home">
    <div class="right">
      <router-view/>
    </div>
    <div id="nav">
      <router-link to="/router/1">路由1</router-link><br>
      <router-link to="/router/2">路由2</router-link><br>
      <router-link to="/router/3">路由3</router-link><br>
      <router-link to="/share">share</router-link><br>
      <router-link to="/video">video</router-link><br>
      <router-link to="/video1">video</router-link><br>
      <router-link to="/audio">audio</router-link><br>
      <router-link to="/html">html</router-link><br>
      <router-link to="/qrcode">二维码</router-link><br>
      <router-link to="/filters">filters</router-link><br>
      <router-link to="/fileType">识别文件类型</router-link><br>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {
  }
}
</script>
<style>
.home{
  width:1100px;
  margin:0 auto;
}

.home:after{
  content:'';
  clear: both;
  display:block
}
</style>
