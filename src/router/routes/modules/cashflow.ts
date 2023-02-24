import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const cashflow: AppRouteModule = {
  path: '/cashflow',
  name: 'Cashflow',
  component: LAYOUT,
  redirect: '/cashflow/index',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'ant-design:money-collect-filled',
    title: t('routes.cashflow.home'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'index',
      name: 'CashflowIndex',
      component: () => import('/@/views/cashflow/index.vue'),
      meta: {
        title: t('routes.cashflow.index'),
        icon: 'ant-design:money-collect-outlined',
        // hideMenu: true,
      },
    },
    {
      path: 'edit/:id?',
      name: 'CashflowEdit',
      component: () => import('/@/views/cashflow/edit.vue'),
      meta: {
        title: t('routes.cashflow.edit'),
        icon: 'ant-design:money-collect-twotone',
        // hideMenu: true,
      },
    },
  ],
}

export default cashflow
