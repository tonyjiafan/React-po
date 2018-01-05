import HomeIcon from 'material-ui-icons/Home';
import PhoneIcon from 'material-ui-icons/Phone';
import FavoriteIcon from 'material-ui-icons/Favorite';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import StarIcon from 'material-ui-icons/Star';
import FolderIcon from 'material-ui-icons/Folder';

export const tabs2 = {
  share: '分享',
  job: '工作',
  ask: '问答',
  good: '精品',
  dev: '测试',
  all: '全部',
}
export const tabs = [
  { zh: '全部', name: 'all', img: PersonPinIcon },
  { zh: '分享', name: 'share', img: FavoriteIcon },
  { zh: '工作', name: 'job', img: HomeIcon },
  { zh: '问答', name: 'ask', img: PhoneIcon },
  { zh: '精品', name: 'good', img: StarIcon },
  { zh: '测试', name: 'dev', img: FolderIcon }
]

export const topicSchema = {
  id: '',
  author_id: '',
  tab: '',
  content: '',
  title: '',
  last_reply_at: '',
  good: false,
  top: false,
  reply_count: 0,
  visit_count: 0,
  create_at: '',
  is_collect: '',
  author: {
    loginname: '',
    avatar_url: '',
  },
  replies: [],
}

export const replySchema = {
  id: '',
  author: {
    loginname: '',
    avatar_url: '',
  },
  content: '',
  ups: [],
  create_at: '',
  reply_id: null,
  is_uped: false,
}

export default {
  tabs,
  topicSchema,
  replySchema
}
