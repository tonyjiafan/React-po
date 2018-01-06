import fetch from './config'

// 获取列表
export function getTopicList(tab) {
  let api = `/topics?tab=${tab}`
  return fetch.get(api)
}

// 获取详情
export function getTopicDetail(id, mdrender, accesstoken) {
  let api = `/topic/${id}`
  return fetch.get(api, {
    mdrender: mdrender,
    accesstoken: accesstoken
  })
}
