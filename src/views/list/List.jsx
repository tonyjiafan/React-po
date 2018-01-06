import React from 'react';
import PropTypes from 'prop-types';
import {
  inject,
  observer
} from 'mobx-react';
import queryString from 'query-string';
import Helmet from 'react-helmet';
import Tabs, { Tab } from 'material-ui/Tabs';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress'

import { AppState, TopicState } from '../../store/store';
import '../../static/css/base.css';
import Container from '../../components/Container';
import TopBar from '../../components/TopBar';
import TopicListItem from './list-item';
import { tabs } from '../../util/data';
// import GoirdList from '../../components/GoirdList';

@inject( stores => {
  return {
    appState: stores.appState,
    topicState: stores.topicState
  }
}) @observer
export default class TopicWarp extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor() {
    super()
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
    this.getTopicData = this.getTopicData.bind(this)
  }

  componentDidMount() {
    let tab = this.getTab()
    this.getTopicData(tab)
  }
  // 获取 列表数据
  getTopicData(val) {
    this.props.topicState.getTopics(val || 'all')
  }
  // 查看props 更新数据
  componentWillReceiveProps(enxtProps) {
    if (enxtProps.location.search !== this.props.location.search) {
      let val = this.getTab(enxtProps.location.search)
      this.getTopicData(val)
    }
  }
  // tab切换的操作
  changeTab(e, value) {
    this.context.router.history.push({
      pathname: '/list',
      search: `?tab=${value}`
    })
    // this.getTopicData(value)
  }
  // 获取路由上的参数
  getTab(search) {
    search = search || this.props.location.search
    const query = queryString.parse(search)
    return query.tab || 'all'
  }
  // 查看详情按钮
  listItemClick(id) {
    console.log(id)
  }

  render() {
    const {
      topicState,
    } = this.props
    const topicList = topicState.topics
    const syncingTopics = topicState.syncing
    // 获取路由上的参数
    const tabname = this.getTab()

    return (
      <Container>
        <Helmet>
          <title>话题列表</title>
        </Helmet>
        <TopBar />
        <div>
          <Tabs
            value={tabname}
            onChange={this.changeTab}
            indicatorColor="primary"
            textColor="primary"
            fullWidth>
            {
            tabs.map((t) => {
              return(
                <Tab key={t.name} icon={<t.img />} label={t.zh} value={t.name} />
              )
            })
            }
          </Tabs>
        </div>
        <List>
          {
            topicList.map(topic => {
              return(
                <TopicListItem onClick={this.listItemClick} topic={topic} key={topic.id} />
              )
            })
          }
        </List>
          {
            syncingTopics ?
            (
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '40px 0',
              }}>
                <CircularProgress color="accent" size={100} />
              </div>
            ) :
            null
          }
      </Container>
    );
  }
}

TopicWarp.wrappedComponent.propTypes = {
  appState: PropTypes.instanceOf(AppState),
  topicState: PropTypes.instanceOf(TopicState)
}

TopicWarp.propTypes = {
  location: PropTypes.object.isRequired
}
