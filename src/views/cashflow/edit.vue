<template>
  <PageWrapper title="编辑资金流水">
    <CollapseContainer title="表单校验">
      <BasicForm @register="register" @submit="handleSubmit" />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, unref, ref } from 'vue'
  import { BasicForm, FormSchema, useForm } from '/@/components/Form/index'
  import { CollapseContainer } from '/@/components/Container'
  import { PageWrapper } from '/@/components/Page'
  import { cashflowDetailApi, cashflowUpdateApi } from '/@/api/cashflow'
  import { useGo } from '/@/hooks/web/usePage'
  import { useRouter } from 'vue-router'
  const schemas: FormSchema[] = [
    {
      field: 'id',
      label: 'ID',
      required: true,
      component: 'Input',
      colProps: {
        span: 10,
      },
      show: false, // 隐藏域
    },
    {
      field: 'incomePayType',
      component: 'Select', // Select选择器
      label: '收支类型',
      colProps: {
        span: 10,
      },
      componentProps: {
        mode: 'single',
        options: [
          {
            label: '提现',
            value: '1',
            key: '1',
          },
          {
            label: '充值',
            value: '2',
            key: '2',
          },
          {
            label: '转账',
            value: '3',
            key: '3',
          },
          {
            label: '理财',
            value: '4',
            key: '4',
          },
          {
            label: '优惠券',
            value: '5',
            key: '5',
          },
        ],
        onChange: (value) => {
          console.log(value, '123')
        },
      },
      rules: [
        {
          required: true,
          message: '请选择收支类型',
          type: 'string',
        },
      ],
    },
    {
      field: 'incomePayDes',
      component: 'Input',
      label: '收支描述',
      colProps: {
        span: 10,
      },
      required: true,
    },
    {
      field: 'income',
      label: '进账',
      required: true,
      component: 'Input',
      colProps: {
        span: 10,
      },
    },
    {
      field: 'pay',
      component: 'Input',
      label: '支出',
      colProps: {
        span: 10,
      },
      required: true,
    },
    {
      field: 'accoutCash',
      component: 'Input',
      label: '余额',
      colProps: {
        span: 10,
      },
      rules: [{ required: true, type: 'string', message: '请输入余额' }],
    },
    {
      field: 'remarks',
      component: 'InputTextArea',
      label: '备注',
      colProps: {
        span: 10,
      },
      required: true,
    },
  ]

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      // 1.获取路由参数
      const { currentRoute } = useRouter()
      const { params } = unref(currentRoute)
      const cashInfo = ref()
      //2.根据ID发送请求获取当前资金流水数据
      const getDetailnfo = async () => {
        cashInfo.value = await cashflowDetailApi({ id: params.id })
        setFieldsValue(cashInfo.value)
      }
      getDetailnfo()
      //3.注册表单
      const [register, { setFieldsValue }] = useForm({
        labelWidth: 120,
        schemas,
        actionColOptions: {
          span: 24,
        },
        submitButtonOptions: {
          text: '提交',
        },
      })
      const go = useGo()
      return {
        register,
        schemas,
        //提交表单：发送请求成功后跳回/cashflow/index页面
        handleSubmit: async (values: any) => {
          await cashflowUpdateApi(values)
          go('/cashflow/index')
        },
        //重置表单
        handleReset: () => {
          setFieldsValue(cashInfo.value)
        },
      }
    },
  })
</script>
