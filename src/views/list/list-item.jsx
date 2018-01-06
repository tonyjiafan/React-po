import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
import Avatar from 'material-ui/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import { withStyles } from 'material-ui/styles';
import cx from 'classnames';
import {
  topicPrimaryStyle,
  topicSecondaryStyle
} from './style';

const tabBlock = (tab, isTop, isGood) => {
  return isTop ? '置顶' : (isGood ? '精品' : tab)
}

const TopicPrimary = (props) => {
  const topic = props.topic
  const classes = props.classes
  const isTop = topic.top
  const isGood = topic.good
  const classNames = cx([classes.tab, isTop ? classes.top : '', isGood ? classes.good : ''])
  return(
    <label className={ classes.root }>
      <span className={ classNames }>
        {
          tabBlock(topic.tab, isTop, isGood)
        }
      </span>
      <span className={ classes.title }>{topic.title}</span>
    </label>
  )
}

const TopicSecondary = ({ classes, topic }) => (
  <label className={ classes.root }>
    <span className={ classes.username }>{topic.author.loginname}</span>
    <span>
      <span className={ classes.count }>{topic.reply_count}</span>
      <span > / </span>
      <span className={ classes.visitCount }>{topic.visit_count}</span>
    </span>
    <span className={ classes.accentColor }>创建时间：{topic.create_at}</span>
  </label>
)

const Primary = withStyles(topicPrimaryStyle)(TopicPrimary)
const Secondary = withStyles(topicSecondaryStyle)(TopicSecondary)

const TopicListItem = ({ onClick, topic }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      {
        topic.author.avatar_url ?
        (<Avatar src={topic.author.avatar_url} />) :
        <FavoriteIcon />
      }
    </ListItemAvatar>
   <ListItemText
     primary={<Primary topic={topic} />}
     secondary={<Secondary topic={topic} />}
   />
  </ListItem>
)

TopicPrimary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}
TopicSecondary.propTypes = {
  topic: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
}

TopicListItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  topic: PropTypes.object.isRequired
}

export default TopicListItem;
