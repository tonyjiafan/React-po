import fetch from './config'

// 获取所有抽奖结果
export function getTopicList () {
  let api = `/topics`;
  return fetch.get(api);
}
