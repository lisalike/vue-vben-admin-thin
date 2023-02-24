import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel'
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams

export interface ArticleListItem {
  id: number
  title: string
  abstracts: string
  author: string
  publishDate: string
  content: string
}

/**
 * @description: Request list return value
 */
export type ArticleListGetResultModel = BasicFetchResult<ArticleListItem>
