export const topicPrimaryStyle = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      textDecoration: 'none',
      color: '#555',
    },
    tab: {
      backgroundColor: theme.palette.primary[400],
      textAlign: 'center',
      display: 'inline-block',
      padding: '0 6px',
      color: '#fff',
      borderRadius: 3,
      marginRight: 10,
      fontSize: '12px',
      flexShrink: 0,
    },
    good: {
      backgroundColor: theme.palette.accent[300],
    },
    top: {
      backgroundColor: theme.palette.accent[600],
    },
  }
}

export const topicSecondaryStyle = (theme) => {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      paddingTop: 3,
      flexWrap: 'wrap',
    },
    count: {
      textAlign: 'center',
      marginRight: 10,
      marginLeft: 10,
      color: '#01aef2',
    },
    visitCount: {
      textAlign: 'center',
      marginRight: 10,
      marginLeft: 10,
    },
    userName: {
      marginRight: 20,
      color: 'pink',
    },
    accentColor: {
      color: theme.palette.accent[500],
    },
  }
}

export const topicListStyle = () => {
  return {
    root: {
      margin: 24,
      marginTop: 80,
    },
    loading: {
      display: 'flex',
      justifyContent: 'space-around',
    },
  }
}
