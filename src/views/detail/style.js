const topicDetailStyle = (theme) => {
  return {
    header: {
      margin: 0,
      paddingTop: 20,
    },
    avatar: {
      display: 'block',
      margin: '0 auto 10px',
      width: 100,
      height: 100,
      border: '2px solid pink',
      animation: 'App-logo-spin infinite 10s linear',
    },
    title: {
      color: '#666',
      margin: 20,
      paddingTop: 20,
      textIndent: '1em',
    },
    childrens: {
      display: 'inline-block',
      fontSize: '14px',
      margin: 20,
      '& span': {
        display: 'inline-block',
        backgroundColor: theme.palette.primary[300],
        color: '#fff',
        margin: '6px',
        padding: '4px 20px',
        borderRadius: '4px',
      }
    },
    avatarWarp: {
      width: '100%',
      height: 'auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent:'center',
    },
    card: {
      maxWidth: 140,
      margin: '6px',
    },
    media: {
      height: 100,
    },
  }
}


export default topicDetailStyle;
