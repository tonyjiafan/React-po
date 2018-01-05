import {
  observable,
  // computed,
  // action,
} from 'mobx'

export default class TopicState {
  // constructor({ topicList } = { topicList: [] }) {
  //   this.topicList = topicList
  //   console.log(this.topicList)
  // }
  @observable topicList = []
}
