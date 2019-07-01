<template>
  <!-- 视频 -->
  <div class="video" @click="btn">
    <video :src="url" id="video"></video>
    <!-- <video :src="url" id="video" loop='true'></video> -->
    <img v-if="isshow" src="../../assets/images/audio/audio-icon.png" alt="">
    <div class="control">
      <div>
        <div>进度条</div>
      </div>
      <div class="controlButton">
        <div>暂停</div>
        <div>声音</div>
        <div>倍速</div>
        <div>循环</div>
        <div>桌面全屏</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video',
  props: {
  },
  data () {
    return {
      // url: 'http://www.zhuoyuekecheng.com/ilife/upload/apk/20190506160025608_lxilg.mp4',
      url: 'http://www.zhuoyuekecheng.com/ilife/upload/apk/20190523165105852_s5r7i.avi',
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
  width: 900px;
  height: 600px;
  position: relative;
  border:1px solid red;
}
video{
  width: 900px;
  height: 600px;
  border:1px solid green;
}
img{
  position: absolute;
  width:60px;
  height:60px;
  border-radius:50%;
  top:270px;
  right:420px;;
}
.control{
  width:100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
}
.controlButton{
  display: flex
}
.controlButton > div{
  line-height: 40px;
  margin-right: 5px;
  color: #fff;
}
</style>
