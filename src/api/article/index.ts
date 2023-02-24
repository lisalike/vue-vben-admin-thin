import { defHttp } from '/@/utils/http/axios'
import { DemoParams, ArticleListItem, ArticleListGetResultModel } from './model'

enum Api {
  ARTICLE_LIST = '/article/list',
  ARTICLE_DELETE = '/article/delete',
  ARTICLE_CREATE = '/article/create',
}

/**
 * @description: Get sample list value
 */
export const articleListApi = (params: DemoParams) =>
  defHttp.get<ArticleListGetResultModel>({
    url: Api.ARTICLE_LIST,
    params,
  })

/**
 * @description: Delete Article
 */
export const articleDeleteApi = (params: DemoParams) =>
  defHttp.get<ArticleListGetResultModel>({
    url: Api.ARTICLE_DELETE,
    params,
  })

/**
 * @description: Create Article
 */
export const articleCreateApi = (params: any) =>
  defHttp.post<ArticleListItem[]>({
    url: Api.ARTICLE_CREATE,
    params,
  })
