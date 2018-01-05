import React, { Component } from 'react';
// 指定prop的类型
import PropTypes from 'prop-types';
import {
  observer,
  inject
} from 'mobx-react';
import Button from 'material-ui/Button';
import AppState from '../../store/app-state';
import logo from '../../static/images/logo.png';
import './App.css';

@inject('appState') @observer
class App extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
  }
  componentDidMount() {
    // do something
  }
  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button raised color="accent">xiha</Button>
        <div>
          <input type="text" onChange={this.changeName} />
          <br />
          <Button raised color="primary"> this i button</Button>
          <span> {this.props.appState.msg} </span>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  appState: PropTypes.instanceOf(AppState)
}

export default App;
