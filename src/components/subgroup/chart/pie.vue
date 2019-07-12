<template>
  <!-- 扇形图 -->
   <div id="pie" style="width: 600px;height:400px;"></div>
</template>

<script>
export default {
  name: '',
  props: {
    datalist: Object
  },
  mounted () {
    const myChart = this.echarts.init(document.getElementById('pie'))
    myChart.setOption(this.datalist)
  }
}
</script>

<style scoped>
</style>
