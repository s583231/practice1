<template>
  <!-- 视频 -->
  <div class="video" @click="btn">
    <video :src="url" id="video" loop='true'></video>
    <img v-if="isshow" src="../../assets/images/audio/audio-icon.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'video',
  props: {
  },
  data () {
    return {
      url: 'http://www.zhuoyuekecheng.com/ilife/upload/apk/20190506160025608_lxilg.mp4',
      video: null,
      isshow: true
    }
  },
  mounted () {
    this.video = document.getElementById('video')
  },
  methods: {
    btn () {
      if (this.video.paused) {
        this.video.play()
        this.isshow = false
      } else {
        this.video.pause()
        this.isshow = true
      }
    }
  }
}
</script>

<style scoped>
.video{
  border:1px solid red;
  width:120px;
  height:70px;
  position: relative;
}
video{
  width:120px;
}
img{
  position: absolute;
  width:30px;
  height:30px;
  border-radius:50%;
  top:20px;
  right:45px;;
}
</style>
