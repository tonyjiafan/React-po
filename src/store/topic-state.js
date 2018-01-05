import {
  observable,
  computed,
  // toJs,
  action,
  extendObservable,
} from 'mobx';
import { topicSchema } from '../util/data'
import { getTopicList } from '../api/list'
// export default class TopicState {
//   constructor({ topicList, name } = { topicList: [], name: 'TOPIC - tonyjiafan' }) {
//     this.topicList = topicList
//     this.name = name
//   }
//   @observable topicList
//   @observable name
//   @computed get sayName() {
//     return `${this.name} 我原本的值是 "TOPIC - tonyjiafan"`
//   }
// }

const createTopic = (topic) => {
  return Object.assign({}, topicSchema, topic)
}

class Topic {
  constructor(data) {
    extendObservable(this, data)
  }
  @observable syncing = false
  @observable topicName
}

class TopicState {
  @observable topics
  @observable syncing
  @observable topicName

  constructor({ syncing, topics, topicName } = { syncing: false, topics: [], topicName: '崩虾卡拉卡' }) {
  this.syncing = syncing
  this.topicName = topicName
  this.topics = topics.map(topic => Topic(createTopic(topic)))
  }

  @computed get sayName() {
    return `${this.topicName} 我原本的值是 "崩虾卡拉卡"`
  }

  @action addTopic(topic) {
    this.topics.push(new Topic(createTopic(topic)))
  }

  @action getTopics(tab) {
    this.syncing = true
    this.topics = []
    getTopicList(tab).then((r) => {
      // r.data.forEach((e, i) => {
      //   addTopic(e)
      // })
      const topics = r.data.map(topic => {
        return new Topic(createTopic(topic))
      })
      this.topics = topics
      this.syncing = false
    }).catch((r) => {
      console.log(r)
    })
  }
}

export default TopicState;
