<template>
  <!-- 视频 -->
  <div class="video">
    <video :src="url" id="videobtn" @loadedmetadata="durationfun"></video>
    <!-- <video :src="url" id="video" loop='true'></video> -->
    <div class="img">
      <img v-if="isshow" :src="picaddress + 'audio/play-icon.png'" alt="" @click="btnPlay">
    </div>
    <div class="control">
      <div class="pro">
        <el-progress
          :percentage="progress"
          :show-text="false"
          color="RGB(237,66,97)"
        ></el-progress>
        <div class="proline" @click="prolinex"></div>
      </div>
      <div class="controlButton">
        <div class="play">
          <img v-if="isshow" :src="picaddress + 'audio/播放icon.png'" alt="" @click="btnPlay" title="播放">
          <img v-else :src="picaddress + 'audio/暂停-icon.png'" alt="" @click="btnPause" title="暂停">
        </div>
        <div class="time">
          {{time + '/' + currentTime}}
        </div>
        <div class="voice">
          <img :src="picaddress + 'audio/音量-icon.png'" alt="" title="音量">
          <!-- <img :src="picaddress + 'audio/52静音.png'" alt="" title="静音"> -->
        </div>
        <!-- <div class="speed">倍速</div> -->
        <div class="loop">
          <img v-if="isloop" :src="picaddress + 'audio/循环.png'" alt="" title="循环" @click="loopfun">
          <img v-else :src="picaddress + 'audio/禁止.png'" alt="" title="禁止循环" @click="loopfun">
        </div>
        <div class="fullScreen">
          <img :src="picaddress + 'audio/全屏.png'" alt="" title="全屏">
        </div>
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
      picaddress: '../../../assets/images/',
      url: 'http://www.zhuoyuekecheng.com/ilife/upload/apk/20190528151632087_8ygc7-sub.mp4',
      // url: 'http://www.zhuoyuekecheng.com/ilife/upload/apk/20190425160344613_aa70d.mp4',
      // url: 'http://www.zhuoyuekecheng.com/ilife/upload/apk/20190523165105852_s5r7i.avi', // 视频的链接
      video: null, // 视频的元素
      isshow: true, // 是否播放
      isloop: false, // 是否循环
      time: 0, // 视频总时长
      currentTime: 0, // 视频已播放时长
      progress: 0 // 视频已播放，进度条长度
    }
  },
  mounted () {
    this.video = document.getElementById('videobtn')
  },
  methods: {
    // 播放暂停按钮
    btnPlay () {
      this.video.play()
      this.isshow = false
      this.videoInterval = setInterval(() => {
        this.currentTime = this.transTime(this.video.currentTime)
        this.progress = (this.video.currentTime / this.video.duration) * 100
        if (this.video.duration === this.video.currentTime) {
          this.overVideo()
        }
      }, this.video.duration)
    },
    // 暂停
    btnPause () {
      this.video.pause()
      this.isshow = true
    },
    // 音频播放完的时候
    overVideo () {
      // this.pauseAudio();
      clearInterval(this.videoInterval)
      this.isshow = true
      this.progress = 0
    },
    // 获取视频的总时间和已播放时间
    durationfun () {
      // duration返回视频的长度（以秒计）
      // 总时长
      this.time = this.transTime(this.video.duration)
      // currentTime 已播放时长
      // 已播放时长
      this.currentTime = this.transTime(this.video.currentTime)
    },
    // 转换音频显示时长 将秒转换为几分几秒的格式
    transTime (time) {
      let timeint = parseInt(time)
      let h = parseInt(timeint / 60 / 60)
      let colon = ':'
      if (h > 0) {
        let m = parseInt(timeint % 60)
        if (m < 10) {
          m = '0' + m
        }
        if (h < 10) {
          h = '0' + h
        }
        return h + colon + m
      } else {
        let m = parseInt(timeint / 60)
        let s = parseInt(timeint % 60)
        if (m < 10) {
          m = '0' + m
        }
        if (s < 10) {
          s = '0' + s
        }
        return m + colon + s
      }
    },
    // 点击进度条，视频快进或后退
    prolinex (ev) {
      // 850是进度条的长度
      // 进度条长度
      this.progress = (ev.offsetX / 850) * 100
      // 已播放的音频长度
      this.video.currentTime = (ev.offsetX / 850) * this.video.duration
    },
    loopfun () {
      this.isloop = !this.isloop
      if (this.isloop === true) {
        this.video.loop = true
        return
      }
      if (this.isloop === false) {
        this.video.loop = false
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
/* 视频的大小 */
video{
  max-width: 900px;
  height: 600px;
}

/* 视频里面的播放按钮 */
.video > .img{
  position: absolute;
  width:60px;
  height:60px;
  top:270px;
  right:420px;
}
.video .img img{
  width: 60px;
  height: 60px;
}
/* 视频下方的控件 */
.control{
  width:100%;
  height: 60px;
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
  bottom: 0;
}
/* 控件里面的进度条 */
.pro {
  width: 850px;
  margin: 15px auto 5px;
}
.proline{
  width: 850px;
  height: 6px;
  position: absolute;
  top: 15px;
}
/* 控件里面的包含各种按钮的父元素 */
.controlButton{
  display: flex;
  padding: 2px 0px 2px 30px;
}
/* 按钮所占宽度 */
.controlButton .play,
.controlButton .voice,
.controlButton .speed,
.controlButton .loop,
.controlButton .fullScreen {
  flex: 1;
}
.controlButton > div{
  margin-right: 15px;
  color: #fff;
  flex: 20;
}
/* 按钮的大小 */
.controlButton > div > img {
  height: 20px;
}

</style>
