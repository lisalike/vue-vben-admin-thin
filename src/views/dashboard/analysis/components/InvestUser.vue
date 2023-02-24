<template>
  <Card title="用户投资" :loading="loading">
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

  const colorList = [
    '#5470c6',
    '#91cc75',
    '#fac858',
    '#ee6666',
    '#73c0de',
    '#3ba272',
    '#fc8452',
    '#9a60b4',
    '#ea7ccc',
  ]
  // 监听loading的变化，一旦loading为true的时候调用setOptions设置eachrts选项
  watch(
    () => props.loading,
    () => {
      if (props.loading) {
        return
      }
      setOptions({
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 20,
          data: ['金融人员', 'IT人员', '保险人员', '理财师', '律师'],
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            selectedMode: 'single',
            radius: ['0%', '30%'],
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '金融人员', selected: true },
              { value: 679, name: 'IT人员' },
              { value: 1548, name: '保险人员' },
            ],
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['40%', '55%'],
            center: ['50%', '60%'],
            data: [
              { value: 310, name: '理财师' },
              { value: 528, name: '律师' },
            ],
            itemStyle: {
              color: function (params: any) {
                return colorList[params.dataIndex]
              },
            },
          },
        ],
      })
    },
    { immediate: true },
  )
</script>
