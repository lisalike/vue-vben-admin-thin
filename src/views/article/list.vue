<template>
  <div class="p-4">
    <BasicTable
      :loading="loading"
      :bordered="border"
      showTableSetting
      :pagination="pagination"
      @columns-change="handleColumnChange"
      @register="registerTable"
    >
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
        <a-button type="primary" @click="toggleBorder">
          {{ !border ? '显示边框' : '隐藏边框' }}
        </a-button>
        <a-button type="primary" @click="toggleLoading"> 开启loading </a-button>
      </template>
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
    </BasicTable>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue'
  import {
    BasicTable,
    ColumnChangeParam,
    useTable,
    BasicColumn,
    TableAction,
  } from '/@/components/Table'
  import { articleListApi, articleDeleteApi } from '/@/api/article/index'
  import { getBasicColumns, getBasicData } from '../demo/table/tableData'
  import { formatToDateTime } from '/@/utils/dateUtil'
  const columns: BasicColumn[] = [
    {
      title: 'ID',
      width: 150,
      dataIndex: 'id',
      sorter: true,
      sortOrder: 'ascend',
    },
    {
      title: '标题',
      dataIndex: 'title',
      width: 200,
    },
    {
      title: '摘要',
      dataIndex: 'abstracts',
      width: 200,
    },
    {
      title: '作者',
      dataIndex: 'author',
      width: 80,
    },
    {
      title: '发布时间',
      dataIndex: 'publishDate',
      width: 150,
      format: (value: any) => {
        return formatToDateTime(value)
      },
    },
    {
      title: '内容',
      dataIndex: 'content',
      width: 200,
    },
  ]

  export default defineComponent({
    components: { BasicTable, TableAction },
    setup() {
      const loading = ref(false)
      const border = ref(true)
      const pagination = ref<any>(false)
      function toggleLoading() {
        loading.value = true
        setTimeout(() => {
          loading.value = false
          pagination.value = { pageSize: 20 }
        }, 3000)
      }
      function toggleBorder() {
        border.value = !border.value
      }

      function handleColumnChange(data: ColumnChangeParam[]) {
        console.log('ColumnChanged', data)
      }
      function onChange() {
        console.log('onChange', arguments)
      }
      const [
        registerTable,
        {
          //刷新表格
          reload,
          // 获取表格分页信息
          getPaginationRef,
          // 重新设置表格数据
          setTableData,
          // 设置表格分页
          setPagination,
        },
      ] = useTable({
        pagination: {
          pageSize: 3,
        },
        // 允许表格自适应页面
        canResize: true,
        title: '学生列表',
        titleHelpMessage: '可以查询学生的信息',
        // 发送请求的方法
        api: articleListApi,
        // 指定表格列
        columns: columns,
        // 不显示索隐列
        showIndexColumn: false,
        // 每一行的key
        rowKey: 'id',
        // 显示表格设置
        showTableSetting: true,
        // 每当分页、过滤条件、排序条件发生改变的时候执行onChange
        onChange,
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          fixed: 'right',
        },
      })

      // 删除数据
      async function handleDelete(record: Recordable) {
        const { current, pageSize } = getPaginationRef() as any
        let data = await articleDeleteApi({
          page: current,
          pageSize: pageSize,
          id: record.id,
        })
        setTableData(data.items)
        setPagination({
          total: data.total,
        })
      }

      function handleReloadCurrent() {
        reload()
      }
      function handleReload() {
        reload({
          page: 1,
        })
      }

      return {
        registerTable,
        onChange,
        handleDelete,
        handleReloadCurrent,
        handleReload,
        loading,
        border,
        toggleLoading,
        toggleBorder,
        pagination,
        handleColumnChange,
      }
    },
  })
</script>
