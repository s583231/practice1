<template>
  <!-- 音频 -->
  <div class="audio">
    <div class="audio1">
      <audio :src="url" controls></audio>
      <audio :src="url" id="audiobtn" @loadedmetadata="durationfun"></audio>
      <div class="audiobox">
        <div class="img">
          <img src="../../assets/images/audio/audio-icon.png" alt="" @click="btn">
        </div>
        <div class="content">
          <div class="name">{{name}}</div>
          <div class="time">{{duration}}</div>
        </div>
      </div>
    </div>
    <div class="buttom">
      <div class="buttomAudio">
        <div class="img">
          <img src="../../assets/images/audio/audio-icon.png" alt="" @click="btn">
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'audio',
  props: {
    url: String, // 音频链接
    name: String // 音频名称
  },
  data () {
    return {
      audio: null,
      duration: null,
      buttonaudio: false
    }
  },
  mounted () {
    this.url = 'http://www.zhuoyuekecheng.com/ilife/upload/default/20190613173138868_lm86s.mp3'
    this.name = '曲名'
    this.audio = document.getElementById('audiobtn')
  },
  methods: {
    // loadedmetadata事件为音频/视频文件加载完数据后触发
    durationfun () {
      // duration 获取音频的时长，单位为s
      this.duration = this.transTime(this.audio.duration)
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
      // 获取到audio元素
      if (this.audio.paused) { // 如果当前是暂停状态
        this.audio.play() // 播放
      } else { // 如果当前是播放状态
        this.audio.pause() // 暂停
      }
    }
  }
}
</script>

<style scoped>
.audiobox{
  width:357px;
  height: 90px;
  border: 1px solid rgb(206,210,219)
}
.audiobox,
.buttomAudio{
  display:flex
}
.img{
  width:90px;
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
  margin-top: 5px;
}

.buttom{
  width:100%;
  padding: 20px;
  /* background: rgba(0,0,0,1); */
  position: fixed;
  bottom: 0;
}
.buttomAudio{
  width:1200px;
  height:60px;
  margin: 0 auto;
}
.buttomAudio img{
  width:60px;
}
</style>
