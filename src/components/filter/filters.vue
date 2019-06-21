<template>
  <!-- 时间戳转换 -->
  <div class="filters">
      <div class="time">
        时间戳转换
        <div>
            毫秒 转 年月日时分秒
            {{ time1 | dateFormat('YYYY-MM-DD HH:MM:SS')}}
        </div>
        <div>
            秒 转 年月日时分秒
            {{ time2 | dateFormat('YYYY-MM-DD HH:MM:SS')}}
        </div>
        <div>
            秒 转 年月日
            {{ time2 | dateFormat('YYYY-MM-DD')}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
  },
  data () {
    return {
      time1: 1560245812594, // 毫秒
      time2: 1560245852 // 秒
    }
  },
  mounted () {
    const myDate = new Date()
    this.time1 = myDate.getTime() // 毫秒
  }
}
</script>

<style scoped>
</style>
