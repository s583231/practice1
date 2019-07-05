<template>
  <div>
    <barChart :datalist='barlist'></barChart>
    <lineChart :datalist='linelist'></lineChart>
    <pieChart :datalist='pielist'></pieChart>
  </div>
</template>

<script>
import barChart from '../../components/subgroup/chart/bar.vue'
import lineChart from '../../components/subgroup/chart/line.vue'
import pieChart from '../../components/subgroup/chart/pie.vue'
export default {
  name: '',
  components: {
    lineChart, // 线形图
    barChart, // 柱形图
    pieChart // 扇形图
  },
  data () {
    return {
    //   柱形图数据类型
      barlist: {
        title: {
          text: 'ECharts 入门示例'
        },
        tooltip: {},
        legend: {
          data: ['销量']
        },
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      },
      linelist: {},
      pielist: {
        serve: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            data: [
              { value: 235, name: '视频广告' },
              { value: 274, name: '联盟广告' },
              { value: 310, name: '邮件营销' },
              { value: 335, name: '直接访问' },
              { value: 400, name: '搜索引擎' }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
</style>
