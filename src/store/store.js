import AppState from './app-state'
import TopicState from './topic-state'

export { AppState, TopicState }

export default {
  AppState,
  TopicState,
}

export const createStoreMap = () => {
  return {
    appState: new AppState(),
    topicState: new TopicState(),
  }
}
