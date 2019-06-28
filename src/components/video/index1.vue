<template>
  <!-- 视频 -->
  <div class="video" @click="btn">
    <video src="http://www.zhuoyuekecheng.com/ilife/upload/apk/20190506160025608_lxilg.mp4" id="video"></video>
    <!-- <video :src="url" id="video" loop='true'></video> -->
    <img v-if="isshow" src="../../assets/images/audio/audio-icon.png" alt="">
    <div class="control"></div>
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
  height: 50vh;
  position: relative;
  border:1px solid red;
}
video{
  /* width:500px; */
  height: 50vh;
}
img{
  position: absolute;
  width:60px;
  height:60px;
  border-radius:50%;
  top:100px;
  right:220px;;
}
.control{
  width:100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
}
</style>
