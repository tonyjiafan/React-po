import {
  observable,
  computed,
  action,
  extendObservable,
  // toJs,
} from 'mobx';
import { topicSchema } from '../util/data'
import { getTopicList, getTopicDetail } from '../api/list'

const createTopic = (topic) => {
  return Object.assign({}, topicSchema, topic)
}

class Topic {
  constructor(data) {
    extendObservable(this, data)
  }
  @observable syncing = false
  @observable topicName
  @observable topicDetails
}

class TopicState {
  @observable topics
  @observable topicDetails
  @observable syncing
  @observable topicName

  constructor({ syncing, topics, topicDetails, topicName } = {
    syncing: false,
    topics: [],
    topicDetails: {},
    topicName: '崩虾卡拉卡'
  }) {
    this.syncing = syncing
    this.topicDetails = topicDetails
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
      r.data.forEach((e, i) => {
        switch(e.tab) {
          case 'share':
            e.tab = '分享';
            break;
          case 'job':
            e.tab = '工作';
            break;
          case 'ask':
            e.tab = '问答';
            break;
          case 'good':
            e.tab = '精品';
            break;
          case 'dev':
            e.tab = '测试';
            break;
          default:
            e.tab = '全部';
        }
      })
      const topics = r.data.map(topic => {
        return new Topic(createTopic(topic))
      })
      this.topics = topics
      this.syncing = false
    }).catch((r) => {
      console.log(r)
    })
  }

  @action getTopicDetails(id) {
    getTopicDetail(id).then(r => {
      this.topicDetails = r
    }).catch(r => {
      console.log(r)
    })
  }
}

export default TopicState;
