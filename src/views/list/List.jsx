import React from 'react';
import PropTypes from 'prop-types';
import {
  inject,
  observer
} from 'mobx-react';
import Helmet from 'react-helmet';
import Tabs, { Tab } from 'material-ui/Tabs';
import List from 'material-ui/List';
import { CircularProgress } from 'material-ui/Progress'
import HomeIcon from 'material-ui-icons/Home';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import StarIcon from 'material-ui-icons/Star';
import FolderIcon from 'material-ui-icons/Folder';

import { AppState, TopicState } from '../../store/store';
// import { getTopicList } from '../../api/list';
import '../../static/css/base.css';
import Container from '../../components/Container';
import TopBar from '../../components/TopBar';
import TopicListItem from './list-item';
// import GoirdList from '../../components/GoirdList';

@inject( stores => {
  return {
    appState: stores.appState,
    topicState: stores.topicState
  }
}) @observer
export default class TopicWarp extends React.Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount() {
    // getTopicList().then(r => {
    //   console.log(r)
    // })
    this.props.topicState.getTopics()
  }

  changeTab(e, tabIndex) {
    console.log(tabIndex)
    this.setState({ tabIndex })
  }

  listItemClick(id) {
    console.log(id)
  }

  render() {
    // const topic = {
    //   title: 'title',
    //   username: 'tony',
    //   count: 30,
    //   visit_count: 90,
    //   time: '2017-12-01',
    //   image: FavoriteIcon,
    //   tab: 'share'
    // }
    const {
      topicState,
    } = this.props
    const topicList = topicState.topics
    const syncingTopics = topicState.syncing

    return (
      <Container>
        <Helmet>
          <title>话题列表</title>
        </Helmet>
        <TopBar />
        <div>
          <Tabs
            value={this.state.tabIndex}
            onChange={this.changeTab}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab icon={<HomeIcon />} label="全部" />
            <Tab icon={<FavoriteIcon />} label="分享" />
            <Tab icon={<PhoneIcon />} label="工作" />
            <Tab icon={<PersonPinIcon />} label="问答" />
            <Tab icon={<StarIcon />} label="精品" />
            <Tab icon={<FolderIcon />} label="测试" />
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
              <div>
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
