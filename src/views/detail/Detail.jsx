import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {
  inject,
  observer
} from 'mobx-react';
import { withStyles } from 'material-ui/styles';
import { CircularProgress } from 'material-ui/Progress'
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';

import { TopicState } from '../../store/store';
import Container from '../../components/Container';
import topicDetailStyle from './style';
import '../../static/css/base.css';

@inject(stores => {
  return {
    topicState: stores.topicState,
    appState: stores.appState,
  }
}) @observer

class Detail extends React.Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor() {
    super()
    this.getDetail = this.getDetail.bind(this)
  }

  componentDidMount() {
    this.getDetail()
  }

  getDetail() {
    let id = this.props.match.params.id
    this.props.topicState.getTopicDetails(id)
  }

  render() {
    const {
      topicState,
      classes
    } = this.props
    const details = topicState.topicDetails.data
    console.log(details)
    return (
      <div>
        <Helmet>
          <title>
            {
              (details ? `话题详情:${details.title}` : '话题详情')
            }
          </title>
        </Helmet>
        <Container>
          <div>
            {
              !details ?
              <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: '40px 0',
              }}>
                <CircularProgress  color="accent" size={100} />
              </div> :
              <Paper className={classes.header} elevation={4}>
                <Avatar className={classes.avatar} src={details.author.avatar_url} />
                <Typography className={classes.title} type="headline" component="h4">
                  {details.title}
                </Typography>
                <Typography className={classes.childrens} component="div">
                  <span>参与此话题讨论的人有： {details.reply_count}人</span>
                  <span>作者： {details.author.loginname}</span>
                  <span>类型： {details.tab}</span>
                  <span>创建时间： {details.create_at}</span>
                  <span>关注人数 {details.visit_count} 人</span>
                </Typography>
                <div className={classes.avatarWarp}>
                  {
                    details.replies.map((e, i) => {
                      return(
                        <Card key={e.id} className={classes.card}>
                          <CardMedia
                            className={classes.media}
                            image={e.author.avatar_url}
                            title={e.author.loginname}
                          />
                          <CardContent>
                            <Typography className={classes.headerLine} type="headline" component="h4">
                              <Button color="primary">
                                {details.author.loginname}
                              </Button>
                            </Typography>
                            <Typography component="p">
                              {details.create_at}
                            </Typography>
                          </CardContent>
                          <CardActions>
                            <Button raised color="accent">
                              {details.tab}
                            </Button>
                          </CardActions>
                        </Card>
                      )
                    })
                  }
                </div>
              </Paper>
            }
          </div>
        </Container>
      </div>
    )
  }
}

Detail.wrappedComponent.propTypes = {
  appState: PropTypes.object.isRequired,
  topicState: PropTypes.instanceOf(TopicState).isRequired
}

Detail.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(topicDetailStyle)(Detail)
