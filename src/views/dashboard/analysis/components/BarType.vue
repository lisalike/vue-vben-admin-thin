<template>
  <Card title="柱状图" :loading="loading">
    <!--ref引用页面元素-->
    <div ref="chartRef" :style="{ width, height }"></div>
  </Card>
</template>
<script lang="ts" setup>
  import { Ref, ref, watch } from 'vue'
  import { Card } from 'ant-design-vue'
  import { useECharts } from '/@/hooks/web/useECharts'

  // 设置绘图容器的宽高
  const props = defineProps({
    loading: Boolean,
    width: {
      type: String as PropType<string>,
      default: '100%',
    },
    height: {
      type: String as PropType<string>,
      default: '300px',
    },
  })
  // 引用页面绘图容器
  const chartRef = ref<HTMLDivElement | null>(null)
  // 使用useECharts获取setOptions方法
  const { setOptions } = useECharts(chartRef as Ref<HTMLDivElement>)

  // 监听loading的变化，一旦loading为true的时候调用setOptions设置eachrts选项
  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return
      }
      setOptions({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        //图例控件
        legend: {
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度'],
        },
        //绘图区域
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true,
        },
        //x轴为类目轴
        xAxis: [
          {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          },
        ],
        //y轴Wie数值轴
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: '邮件营销',
            type: 'bar',
            stack: '广告',
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: '联盟广告',
            type: 'bar',
            stack: '广告',
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: '视频广告',
            type: 'bar',
            stack: '广告',
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: '搜索引擎',
            type: 'bar',
            data: [862, 1018, 964, 1026, 1679, 1600, 1570],
          },
          {
            name: '百度',
            type: 'bar',
            barWidth: 5,
            stack: '搜索引擎',
            data: [620, 732, 701, 734, 1090, 1130, 1120],
          },
        ],
      })
    },
    { immediate: true },
  )
</script>
