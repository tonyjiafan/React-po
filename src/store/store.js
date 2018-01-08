import AppState from './app-state';
import TopicState from './topic-state';
import TestState from './test';

export { AppState, TopicState, TestState }

export default {
  AppState,
  TopicState,
  TestState,
}

export const createStoreMap = () => {
  return {
    appState: new AppState(),
    topicState: new TopicState(),
    testState: new TestState()
  }
}
