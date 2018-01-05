import React from 'react';
import Helmet from 'react-helmet';
import Tabs, { Tab } from 'material-ui/Tabs';
import HomeIcon from 'material-ui-icons/Home';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import StarIcon from 'material-ui-icons/Star';
import FolderIcon from 'material-ui-icons/Folder';

import { getList } from '../../api/list';
import '../../static/css/base.css';
import Container from '../../components/Container';
import TopBar from '../../components/TopBar';
import TopicListItem from './list-item';
// import GoirdList from '../../components/GoirdList';

export default class List extends React.Component {
  constructor() {
    super()
    this.state = {
      tabIndex: 0,
    }
    this.changeTab = this.changeTab.bind(this)
    this.listItemClick = this.listItemClick.bind(this)
  }

  componentDidMount() {
    // do something
    getList().then(r => {
      console.log(r)
    })
  }

  changeTab(e, tabIndex) {
    console.log(tabIndex)
    this.setState({ tabIndex })
  }

  listItemClick(e) {
    console.log('topic')
  }

  render() {
    const topic = {
      title: 'title',
      username: 'tony',
      count: 30,
      visit_count: 90,
      time: '2017-12-01',
      image: FavoriteIcon,
      tab: 'share'
    }
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
        <div>
          <TopicListItem onClick={this.listItemClick} topic={topic} />
        </div>
        {/* <GoirdList /> */}
      </Container>
    );
  }
}
