import { defHttp } from '/@/utils/http/axios'
import { CashflowListGetResultModel, CashflowListItem } from './model/index'

enum Api {
  CASHFLOW_LIST = '/cashflow/list',
  CASHFLOW_DETAIL = '/cashflow/detail',
  CASHFLOW_DELETE = '/cashflow/delete',
  CASHFLOW_UPDATE = '/cashflow/update',
}

/**
 * @description: Get sample list value
 */
export const cashflowListApi = (params: any) =>
  defHttp.get<CashflowListGetResultModel>({ url: Api.CASHFLOW_LIST, params })

/**
 * @description: DETAIL CASHFLOW
 */
export const cashflowDeleteApi = (params: any) =>
  defHttp.get<CashflowListGetResultModel>({ url: Api.CASHFLOW_DELETE, params })

/**
 * @description: DELETE CASHFLOW
 */
  export const cashflowDetailApi = (params: any) =>
  defHttp.get<CashflowListItem>({ url: Api.CASHFLOW_DETAIL, params })
/**
 * @description: UPDATE CASHFLOW
 */
export const cashflowUpdateApi = (params: any) =>
  defHttp.post<CashflowListItem[]>({ url: Api.CASHFLOW_UPDATE, params })



