<template>
  <div class="p-4">
    <GrowCard :loading="loading" class="enter-y" />
    <SiteAnalysis class="!my-4 enter-y" :loading="loading" />
    <div class="md:flex enter-y">
      <VisitRadar class="md:w-1/3 w-full" :loading="loading" />
      <VisitSource class="md:w-1/3 !md:mx-4 !md:my-0 !my-4 w-full" :loading="loading" />
      <SalesProductPie class="md:w-1/3 w-full" :loading="loading" />
    </div>
    <div class="md:flex enter-y !my-4 w-full">
      <BarType class="md:w-1/2 w-full !mr-4" :loading="loading" />
      <LineType class="md:w-1/2 w-full !mt-4" :loading="loading" />
    </div>
    <div class="md:flex enter-y md:space-x-4 my-4">
      <!-- <InvestArea class="md:w-1/3 w-full" :loading="loading" />
      <InvestUser class="md:w-1/3 w-full !md:my-0 !my-4" :loading="loading" />
      <InvestArea class="md:w-1/3 w-full" :loading="loading" /> -->
      <InvestArea class="md:flex-1 w-full" :loading="loading" />
      <InvestUser class="md:flex-1 w-full !md:my-0 !my-4" :loading="loading" />
      <InvestArea class="md:flex-1 w-full" :loading="loading" />
    </div>
  </div>
</template>
<script lang="ts" setup>
  import { ref } from 'vue'
  import SiteAnalysis from './components/SiteAnalysis.vue'
  import VisitSource from './components/VisitSource.vue'
  import VisitRadar from './components/VisitRadar.vue'
  import SalesProductPie from './components/SalesProductPie.vue'
  import BarType from './components/BarType.vue'
  import LineType from './components/LineType.vue'
  import InvestArea from './components/InvestArea.vue'
  import InvestUser from './components/InvestUser.vue'

  const loading = ref(true)

  setTimeout(() => {
    loading.value = false
  }, 1500)
</script>
