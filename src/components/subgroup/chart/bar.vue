<template>
  <!-- 柱形图 -->
   <div id="bar" style="width: 600px;height:400px;"></div>
</template>

<script>
export default {
  name: '',
  props: {
    datalist: Object
  },
  mounted () {
    const myChart = this.echarts.init(document.getElementById('bar'))
    myChart.setOption(this.datalist)
  }
}
</script>

<style scoped>
</style>
