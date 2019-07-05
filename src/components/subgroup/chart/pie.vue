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
    myChart.setOption({
      // 全局背景色
      backgroundColor: '#2c343c',
      series: [
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
          ],
          // roseType: 'angle', // ECharts 中的饼图支持通过设置 roseType 显示成南丁格尔图。
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          // 饼图的话还要将标签的视觉引导线的颜色设为浅色。
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          itemStyle: {
            normal: {
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    })
  }
}
</script>

<style scoped>
</style>
