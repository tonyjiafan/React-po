import React from 'react'
import {
  withRouter,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Routes from '../route/router'

class App extends React.Component {
  componentDidMount() {
    // do something here
  }
  render() {
    return [
      <Routes key="routes" />,
    ]
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(App)
