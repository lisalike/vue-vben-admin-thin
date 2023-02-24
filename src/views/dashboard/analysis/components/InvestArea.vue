<template>
  <Card title="区域投资" :loading="loading">
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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)',
        },
        legend: {
          orient: 'vertical',
          left: 'left',
          data: ['华东区', '华南区', '华中区', '华北区', '西南区', '东北区', '台港澳'],
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '华东区' },
              { value: 310, name: '华南区' },
              { value: 234, name: '华中区' },
              { value: 835, name: '华北区' },
              { value: 1548, name: '西南区' },
              { value: 335, name: '东北区' },
              { value: 454, name: '台港澳' },
            ],
          },
        ],
      })
    },
    { immediate: true },
  )
</script>
