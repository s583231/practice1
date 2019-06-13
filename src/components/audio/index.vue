<template>
  <!-- 音频 -->
  <div class="audio">
    <audio src="http://www.zhuoyuekecheng.com/ilife/upload/default/20190613173138868_lm86s.mp3" controls></audio>
    <audio src="http://www.zhuoyuekecheng.com/ilife/upload/default/20190613173138868_lm86s.mp3"></audio>
    <div class="audiobox">
      <div class="img">
        <img src="../../assets/images/audio/audio-icon.png" alt="">
      </div>
      <div class="content">
        <div>曲名</div>
        <div>作者</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'audio',
  props: {
  }
}
</script>

<style scoped>
.audiobox{
  width:357px;
  height: 90px;
  border: 1px solid rgb(206,210,219)
}
.audiobox {
  display:flex
}
.img{
  width:90px;
}
.content{
  padding: 20px 40px;
}
</style>
