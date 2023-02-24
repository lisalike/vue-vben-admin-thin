//  import { resultPageSuccess, resultSuccess } from '../_util'

// const cashlist = [
//   {
//     id: 1,
//     createTime: 1171211205701,
//     incomePayType: '2',
//     incomePayDes: '就为了封建礼教昆仑决快乐记录空间看了路',
//     income: 23.23,
//     pay: 89.23,
//     accoutCash: 80.23,
//     remarks: '反而为了解了解了解了解路径路径路径',
//   },
//   {
//     id: 2,
//     createTime: 1212112057011,
//     incomePayType: '3',
//     incomePayDes: 'wefjlj 未记录反馈捡垃圾拉开距离就路径l',
//     income: 343.23,
//     pay: 2323,
//     accoutCash: 3434,
//     remarks: '服务嗯范文芳违法',
//   },
//   {
//     id: 3,
//     createTime: 1221211205701,
//     incomePayType: '5',
//     incomePayDes: 'wefwefwef',
//     income: 23.32323,
//     pay: 90.23,
//     accoutCash: 323.2323,
//     remarks: 'wfefwefwef',
//   },
//   {
//     id: 4,
//     createTime: 1231211205701,
//     incomePayType: '3',
//     incomePayDes: 'efwwef',
//     income: 23.232323,
//     pay: 123,
//     accoutCash: 434,
//     remarks: 'wefwefwef',
//   },
//   {
//     id: 5,
//     createTime: 1241211205701,
//     incomePayType: '1',
//     incomePayDes: 'we分离焦虑了解了解路径了we家里放',
//     income: 2323,
//     pay: 123.23,
//     accoutCash: 12,
//     remarks: 'we街坊邻居了解了解路，捡垃圾路径l',
//   },
//   {
//     id: 6,
//     createTime: 1251211205701,
//     incomePayType: '5',
//     incomePayDes: '我可荆防颗粒捡垃圾路径路',
//     income: 3989,
//     pay: 23,
//     accoutCash: 3489,
//     remarks: '文件了附件路径离开家路径了',
//   },
//   {
//     id: 7,
//     createTime: 1261211205701,
//     incomePayType: '3',
//     incomePayDes: 'fwefwef',
//     income: 323,
//     pay: 23,
//     accoutCash: 23,
//     remarks: 'wefwef',
//   },
// ]

// export default [
//   {
//     url: '/basic-api/cashflow/list',
//     type: 'get',
//     response: ({ query }) => {
//       const { page = 1, pageSize = 20, field, order } = query
//       let incomePayTypes = query['incomePayType[]']
//       let mockList = cashlist
//       //1.排序
//       if (field) {
//         if (order === 'ascend') {
//           mockList.sort((item1, item2) => {
//             return item1[field] - item2[field]
//           })
//         } else {
//           mockList.sort((item1, item2) => {
//             return -item1[field] + item2[field]
//           })
//         }
//       }
//       //2.过滤  incomePayTypes[] = '1'    ;  incomePayTypes[] = ['1','2']
//       if (incomePayTypes) {
//         // 如果客户端传递了多个incomePayTypes，此时incomePayTypes是一个数组
//         if (Array.isArray(incomePayTypes)) {
//           //可能存在数组套数组的情况，扁平化处理之后返回处理后的数据
//           for (let i = 0; i < incomePayTypes.length; i++) {
//             incomePayTypes[i] = Array.isArray(JSON.parse(incomePayTypes[i]))
//               ? JSON.parse(incomePayTypes[i])
//               : incomePayTypes[i]
//           }
//           incomePayTypes = incomePayTypes.flat(Infinity)
//           mockList = mockList.filter((item) => incomePayTypes.includes(item.incomePayType))
//         }
//         // 如果客户端传递了单个incomePayTypes
//         else {
//           incomePayTypes = JSON.parse(incomePayTypes)
//           if (Array.isArray(incomePayTypes)) {
//             mockList = mockList.filter((item) => incomePayTypes.includes(item.incomePayType))
//           } else {
//             mockList = mockList.filter((item) => item.incomePayType == incomePayTypes)
//           }
//         }
//       }
//       return resultPageSuccess(page, pageSize, mockList)
//     },
//   },
//   {
//     url: '/basic-api/cashflow/delete',
//     type: 'get',
//     response: (config) => {
//       const { id, page = 1, pageSize = 20 } = config.query
//       const index = cashlist.findIndex((item) => {
//         if (item.id == id) {
//           return true
//         }
//       })
//       cashlist.splice(index, 1)
//       return resultPageSuccess(page, pageSize, cashlist)
//     },
//   },
//   {
//     url: '/basic-api/cashflow/detail',
//     type: 'get',
//     response: (config) => {
//       const { id } = config.query
//       var find = cashlist.find((item) => {
//         if (item.id == id) {
//           return true
//         }
//       })
//       return resultSuccess(find)
//     },
//   },

//   {
//     url: '/basic-api/cashflow/update',
//     type: 'post',
//     response: (config) => {
//       const data = config.body
//       var index = cashlist.findIndex((item) => {
//         if (item.id == data.id) {
//           return true
//         }
//       })
//       cashlist[index] = data
//       return resultSuccess(cashlist)
//     },
//   },
// ] 