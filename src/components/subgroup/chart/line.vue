<template>
  <!-- 折线图 -->
   <div id="line" style="width: 600px;height:400px;"></div>
</template>

<script>
export default {
  name: '',
  props: {
    datalist: Number
  },
  mounted () {
    const myChart = this.echarts.init(document.getElementById('line'))
    myChart.setOption(this.datalist)
  }
}
</script>

<style scoped>
</style>
