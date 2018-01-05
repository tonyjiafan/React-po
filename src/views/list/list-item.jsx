import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'material-ui/List/ListItem';
import ListItemAvatar from 'material-ui/List/ListItemAvatar';
import ListItemText from 'material-ui/List/ListItemText';
// import Avatar from 'material-ui/List/Avatar';
import FavoriteIcon from 'material-ui-icons/Favorite';
import { withStyles } from 'material-ui/styles';
import {
  topicPrimaryStyle,
  topicSecondaryStyle
} from './style';

const TopicPrimary = ({ classes, topic }) => {
  return(
    <div className={ classes.root }>
      <span className={ classes.tab }>{topic.tab}</span>
      <span className={ classes.title }>{topic.title}</span>
    </div>
  )
}

const TopicSecondary = ({ classes, topic }) => (
  <div className={ classes.root }>
    <span className={ classes.username }>{topic.username}</span>
    <span>
      <span className={ classes.count }>{topic.count}</span>
      <span > / </span>
      <span className={ classes.visitCount }>{topic.visit_count}</span>
    </span>
    <span className={ classes.accentColor }>创建时间：{topic.time}</span>
  </div>
)

const Primary = withStyles(topicPrimaryStyle)(TopicPrimary)
const Secondary = withStyles(topicSecondaryStyle)(TopicSecondary)

const TopicListItem = ({ onClick, topic }) => (
  <ListItem button onClick={onClick}>
    <ListItemAvatar>
      {/* <Avatar src={topic.image} /> */}
      <FavoriteIcon />
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
