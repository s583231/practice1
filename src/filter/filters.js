import moment from 'moment'
// 时间戳转换为正常时间
const dateFormat = (el, fmtstring) => {
  let ellen = el.toString().length
  if (el === 0 || !el) {
    return '无'
  } else if (ellen === 10) {
    return moment(el * 1000).format(fmtstring)
  } else if (ellen === 13) {
    return moment(el).format(fmtstring)
  }
}
// 2.在main.js里面添加
// import * as filters from './filters'
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })
// 3.在.vue文件中直接使用
// <span>（{{time| dateFormat('YYYY-MM-DD HH:MM:SS')}}）</span>
export {
  dateFormat
}
