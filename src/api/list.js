import fetch from './config'

// 获取所有抽奖结果
export function getTopicList (tab) {
  let api = `/topics?tab=${tab}`;
  return fetch.get(api);
}
