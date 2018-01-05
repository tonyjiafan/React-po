import React from 'react'
import PropTypes from 'prop-types'

import Paper from 'material-ui/Paper'
import { withStyles } from 'material-ui/styles'

const styles = {
  root: {
    margin: 0,
    marginTop: 0,
    width: '100%',
    height: 'auto',
    minHeight: '100%',
  },
  '@media screen and (max-width: 480px)': {
    root: {
      margin: 0,
      marginTop: 0,
    },
  },
}


const Container = ({ classes, children }) => {
  return (
    <Paper elevation={4} className={classes.root}>
      {children}
    </Paper>
  )
}

Container.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
}

export default withStyles(styles)(Container)
