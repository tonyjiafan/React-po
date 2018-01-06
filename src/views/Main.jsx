import React from 'react'
import {
  withRouter,
} from 'react-router-dom'
import PropTypes from 'prop-types'
import Routes from '../route/router'
import MainAppBar from '../components/TopBar'

class App extends React.Component {
  componentDidMount() {
    // do something here
  }
  render() {
    return [
      <MainAppBar location={this.props.location} key="app-bar" />,
      <Routes key="routes" />,
    ]
  }
}

App.propTypes = {
  location: PropTypes.object.isRequired,
}

export default withRouter(App)
