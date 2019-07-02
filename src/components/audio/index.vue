<template>
  <!-- 音频 -->
  <div class="audio" oncontextmenu="return false">
    <div class="audio1">
      <audio :src="music" id="audiobtn" @loadedmetadata="durationfun"></audio>
      <div class="audiobox">
        <div class="img">
          <img src="../../assets/images/audio/audio-icon.png" alt="">
          <div class="btn" v-if="isplay" @click="suspend">
            <img src="../../assets/images/audio/暂停-icon.png">
          </div>
          <div class="btn" v-else @click="btn">
            <img src="../../assets/images/audio/播放icon.png">
          </div>
        </div>
        <div class="content">
          <div class="name">{{name}}</div>
          <div class="time">{{currentTime}}/{{duration}}</div>
          <el-progress
            class="left"
            style="width:150px;line-height:60px;margin-top:5px"
            :percentage="progress"
            :show-text="false"
            color="RGB(237,66,97)"
          ></el-progress>
          <div id="prebox">
            <div class="press" @click="site"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'audio',
  props: {
    url: String,
    name: String,
    isplay: Boolean
  },
  data () {
    return {
      music: 'https://m8.music.126.net/20190702165123/ff12a9c31bba90401726f49ab005d92e/ymusic/b854/e1ff/e7c1/653c638e24580e2869184c592a370056.mp3', // 音乐
      audio: null,
      duration: null, // 音频总时长
      currentTime: null, // 已播放时长
      // isplay: false,
      progress: 0, // 播放进度
      audioInterval: '' // 音频定时器
    }
  },
  mounted () {
    this.isplay = false
    this.audio = document.getElementById('audiobtn')
    clearInterval(this.audioInterval)
  },
  methods: {
    site (ev) {
      // 150是进度条的长度
      this.progress = ev.offsetX
      this.audio.currentTime = (this.progress / 150) * this.audio.duration
      console.log(this.audio.currentTime)
    },
    // loadedmetadata事件为音频/视频文件加载完数据后触发
    durationfun () {
      // duration 获取音频的时长，单位为s
      // currentTime 已播放时长
      this.duration = this.transTime(this.audio.duration)
      this.currentTime = this.transTime(this.audio.currentTime)
    },
    // 转换音频显示时长 将秒转换为几分几秒的格式
    transTime (time) {
      let duration = parseInt(time) // 取整数
      let minute = parseInt(duration / 60) // 将秒转换为整分
      let sec = duration % 60 + '' // 是取余，也就是整分后剩余的秒
      let isM0 = ':'
      if (minute === 0) {
        minute = '00'
      } else if (minute < 10) {
        minute = '0' + minute
      }
      if (sec.length === 1) {
        sec = '0' + sec
      }
      return minute + isM0 + sec
    },
    // 播放/暂停按钮
    btn () {
      this.isplay = true
      // 获取到audio元素
      this.audio.play() // 播放
      this.audioInterval = setInterval(() => {
        this.currentTime = this.transTime(this.audio.currentTime)
        this.progress = (this.audio.currentTime / this.audio.duration) * 100
        if (this.audio.duration === this.audio.currentTime) {
          this.overAudio()
        }
      }, this.audio.duration)
    },
    suspend () {
      this.isplay = false
      this.audio.pause() // 暂停
      clearInterval(this.audioInterval)
    },
    // 音频播放完的时候
    overAudio () {
      // this.pauseAudio();
      clearInterval(this.audioInterval)
      this.isplay = false
      this.progress = 0
    }
  }
}
</script>

<style scoped>
#prebox{
  position: relative;
  bottom: 7px;
}
.press{
  width:150px;
  height:6px;
  /* border:1px solid red; */
  border-radius:5px;
  margin-top: 11px;
}
.btn{
  width:25px;;
  height:25px;
  background: rgba(0,0,0,0.4);
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: center;
}
.btn img{
  width:40%;
  margin-top:25%;
}
.audiobox{
  width:357px;
  height: 90px;
  border: 1px solid rgb(206,210,219);
  margin:0 auto;
}
.audiobox {
  display:flex
}
.img{
  width:90px;
  position: relative;
}
.content{
  padding: 20px 40px;
}
.name{
  font-size: 18px;
  font-weight:600;
}
.time{
  color:rgb(128,128,128);
  font-size:16px;
  margin-top: 10px;
}
</style>
