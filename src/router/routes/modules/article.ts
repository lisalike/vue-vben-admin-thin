import type { AppRouteModule } from '/@/router/types'

import { LAYOUT } from '/@/router/constant'
import { t } from '/@/hooks/web/useI18n'

const article: AppRouteModule = {
  path: '/article',
  name: 'Article',
  component: LAYOUT,
  redirect: '/article/list',
  meta: {
    // hideChildrenInMenu: true,
    icon: 'ant-design:safety-certificate-filled',
    title: t('routes.article.home'),
    orderNo: 100000,
  },
  children: [
    {
      path: 'list',
      name: 'ArticleList',
      component: () => import('/@/views/article/list.vue'),
      meta: {
        title: t('routes.article.list'),
        icon: 'ant-design:safety-certificate-outlined',
        // hideMenu: true,
      },
    },
    {
      path: 'create/:id?',
      name: 'ArticleCreate',
      component: () => import('/@/views/article/create.vue'),
      meta: {
        title: t('routes.article.create'),
        icon: 'ant-design:safety-certificate-outlined',
        // hideMenu: true,
      },
    },
  ],
}

export default article
