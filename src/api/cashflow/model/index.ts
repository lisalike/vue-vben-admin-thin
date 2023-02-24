import { BasicPageParams, BasicFetchResult } from '/@/api/model/baseModel'
/**
 * @description: Request list interface parameters
 */
export type DemoParams = BasicPageParams

export interface CashflowListItem {
  id: number
  createTime: string
  incomePayType: string
  incomePayDes: string
  income: string
  pay: string
  accoutCash: string
  remarks: string
}

/**
 * @description: Request list return value
 */
export type CashflowListGetResultModel = BasicFetchResult<CashflowListItem>
