import {
  observable,
  computed,
  // action,
} from 'mobx'

export default class TopicState {
  constructor({ topicList, name } = { topicList: [], name: 'TOPIC - tonyjiafan' }) {
    this.topicList = topicList
    this.name = name
  }
  @observable topicList
  @observable name
  @computed get sayName() {
    return `${this.name} 我原本的值是 "TOPIC - tonyjiafan"`
  }
}
