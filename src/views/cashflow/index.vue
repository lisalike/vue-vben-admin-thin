<template>
  <PageWrapper contentBackground contentClass="flex" dense contentFullHeight fixedHeight>
    <BasicTable @register="registerTable">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <TableAction
            stopButtonPropagation
            :actions="[
              {
                label: '编辑',
                icon: 'ic:outline-delete-outline',
                onClick: handleEdit.bind(null, record),
              },
              {
                label: '删除',
                icon: 'ic:outline-delete-outline',
                onClick: handleDelete.bind(null, record),
              },
            ]"
          />
        </template>
      </template>
      <template #toolbar>
        <a-button type="primary" @click="handleReloadCurrent"> 刷新当前页 </a-button>
        <a-button type="primary" @click="handleReload"> 刷新并返回第一页 </a-button>
        <a-button type="primary" @click="openModal"> 导出excel </a-button>
      </template>
    </BasicTable>
    <ExpExcelModal @register="register" @success="defaultHeader" />
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent } from 'vue'
  import { BasicTable, useTable, BasicColumn, TableAction } from '/@/components/Table'
  import { cashflowListApi, cashflowDeleteApi } from '/@/api/cashflow'
  import { PageWrapper } from '/@/components/Page'
  import { formatToDateTime } from '/@/utils/dateUtil'
  import { jsonToSheetXlsx, ExpExcelModal, ExportModalResult } from '/@/components/Excel'
  import { useModal } from '/@/components/Modal'
  import { useGo } from '/@/hooks/web/usePage'

  const columns = [
    {
      title: '序号',
      dataIndex: 'id',
      fixed: 'left',
      width: 100,
    },
    {
      title: '创建时间',
      dataIndex: 'createTime',
      width: 150,
      // sorter: (a: Recordable, b: Recordable) => {
      //   return a.createTime - b.createTime
      // },
      sorter: true,
      format: (value: any) => {
        return formatToDateTime(value)
      },
    },
    {
      title: '收支类型',
      width: 100,
      dataIndex: 'incomePayType',
      filters: [
        { text: '提现', value: '1' },
        { text: '充值', value: '2' },
        { text: '转账', value: '3' },
        { text: '理财', value: '4' },
        { text: '优惠券', value: ['5', '6', '7', '8'] },
      ],
      format: (value: any) => {
        if (value == '1') {
          return '提现'
        } else if (value == '2') {
          return '充值'
        } else if (value == '3') {
          return '转账'
        } else if (value == '4') {
          return '理财'
        } else {
          return '优惠券'
        }
      },
    },
    {
      title: '收支描述',
      width: 100,
      dataIndex: 'incomePayDes',
    },
    {
      title: '收入',
      width: 100,
      dataIndex: 'income',
    },
    {
      title: '支出',
      width: 100,
      dataIndex: 'pay',
    },
    {
      title: '账户现金',
      width: 100,
      dataIndex: 'accoutCash',
    },
  ] as BasicColumn[]

  export default defineComponent({
    components: { BasicTable, PageWrapper, TableAction, ExpExcelModal },
    setup() {
      const [
        registerTable,
        { reload, getPaginationRef, setPagination, setTableData, getDataSource },
      ] = useTable({
        title: '资金流水首页',
        api: cashflowListApi,
        columns: columns,
        pagination: { pageSize: 3 },
        showIndexColumn: false,
        rowKey: 'id',
        actionColumn: {
          width: 160,
          title: 'Action',
          dataIndex: 'action',
          fixed: 'right',
        },
      })
      function handleReloadCurrent() {
        reload()
      }

      function handleReload() {
        reload({
          page: 1,
        })
      }

      const go = useGo()
      function handleEdit(record: Recordable) {
        console.log('编辑', record)
        go(`/cashflow/edit/${record.id}`)
      }
      async function handleDelete(record: Recordable) {
        const { current, pageSize } = getPaginationRef() as any
        let data = await cashflowDeleteApi({
          page: current,
          pageSize: pageSize,
          id: record.id,
        })
        setPagination({
          total: data.total,
        })
        setTableData(data.items)
      }

      function defaultHeader({ filename, bookType }: ExportModalResult) {
        // 默认Object.keys(data[0])作为header
        jsonToSheetXlsx({
          data: getDataSource(),
          filename,
          write2excelOpts: {
            bookType,
          },
        })
      }
      const [register, { openModal }] = useModal()

      return {
        registerTable,
        handleReloadCurrent,
        handleReload,
        handleEdit,
        handleDelete,
        openModal,
        register,
        defaultHeader,
      }
    },
  })
</script>
