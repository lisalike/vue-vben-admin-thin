<template>
  <PageWrapper>
    <div class="md:flex w-full md:space-x-4">
      <div class="left md:w-3/4 w-full">
        <div class="row1 my-4 md:flex w-full md:space-x-4">
          <div class="bg-slate-700 md:w-5/19 w-full h-200px flex justify-center items-center"
            >头像 /></div
          >
          <div class="bg-slate-800 md:w-6/19 w-full h-200px flex justify-center items-center"
            ><div>姓名:</div>
            <div>自我介绍:</div>
          </div>
          <div class="bg-slate-900 md:w-8/19 w-full h-200px flex justify-center items-center">
            <div>可用现金</div> <div><img src="" alt="" /></div>
          </div>
        </div>
        <div class="row2 my-4 md:flex md:space-x-4">
          <div class="bg-slate-400 md:flex-3 w-full h-200px flex justify-center items-center"
            >代收资产</div
          >
          <div class="bg-slate-600 md:flex-3 w-full h-200px flex justify-center items-center"
            >账户总资产</div
          >
          <div class="bg-slate-800 md:flex-3 w-full h-200px flex justify-center items-center"
            >已得回报</div
          >
        </div>
        <div class="row3 my-4 md:flex md:ml-10 md:mr-10 md:space-x-4">
          <div class="bg-slate-400 md:w-1/4 w-full h-50px flex justify-center items-center"
            >出借服务</div
          >
          <div class="bg-slate-600 md:w-1/4 w-full h-50px flex justify-center items-center"
            >债权转让</div
          >
          <div class="bg-slate-800 md:w-1/4 w-full h-50px flex justify-center items-center"
            >充值提现</div
          >
          <div class="bg-slate-800 md:w-1/4 w-full h-50px flex justify-center items-center"
            >出借投标</div
          >
        </div>
      </div>
      <div class="right md:w-1/4 w-full md:ml-4 !mx:0">
        <div
          class="row1 bg-slate-400 my-4 md:flex-2 w-full h-200px flex justify-center items-center"
          >个人收据</div
        >
        <div
          class="row2 bg-slate-600 my-4 md:flex-2 w-full h-200px flex justify-center items-center"
          >期待回报</div
        >
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { PageWrapper } from '/@/components/Page'
  import { getUserInfo } from '/@/api/sys/user'
</script>
<style lang="less" scoped></style>
