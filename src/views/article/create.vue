<template>
  <PageWrapper title="创建文章">
    <CollapseContainer title="富文本表单">
      <BasicForm
        :labelWidth="100"
        :schemas="schemas"
        :submitButtonOptions="{ text: '提交' }"
        :actionColOptions="{ span: 24 }"
        :baseColProps="{ span: 24 }"
        @submit="handleSubmit"
      />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, h } from 'vue'
  import { BasicForm, FormSchema } from '/@/components/Form/index'
  import { CollapseContainer } from '/@/components/Container/index'
  import { Tinymce } from '/@/components/Tinymce/index'
  import { PageWrapper } from '/@/components/Page'
  import { articleCreateApi } from '/@/api/article/index'
  import { useGo } from '/@/hooks/web/usePage'
  const schemas: FormSchema[] = [
    {
      field: 'title',
      component: 'Input',
      label: '标题',
      defaultValue: '',
      rules: [{ required: true }],
      colProps: {
        span: 10,
      },
    },
    {
      field: 'abstracts',
      component: 'Input',
      label: '摘要',
      defaultValue: '',
      rules: [{ required: true }],
      colProps: {
        span: 10,
      },
    },
    {
      field: 'author',
      component: 'Input',
      label: '作者',
      defaultValue: '',
      rules: [{ required: true }],
      colProps: {
        span: 10,
      },
    },
    {
      field: 'content',
      component: 'Input',
      label: '内容',
      defaultValue: '',
      rules: [{ required: true }],
      render: ({ model, field }) => {
        return h(Tinymce, {
          value: model[field],
          onChange: (value: string) => {
            model[field] = value
          },
        })
      },
    },
  ]
  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const go = useGo()
      return {
        schemas,
        handleSubmit: async (values: any) => {
          // 发送添加请求
          await articleCreateApi(values)
          // 跳转文章列表页面
          go('/article/list')
        },
      }
    },
  })
</script>
