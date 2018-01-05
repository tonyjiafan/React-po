import React, { Component } from 'react';
// 指定prop的类型
import PropTypes from 'prop-types';
import {
  observer,
  inject
} from 'mobx-react';
import Button from 'material-ui/Button';
import { AppState, TopicState } from '../../store/store';
import logo from '../../static/images/logo.png';
import './App.css';

@inject('appState')
@inject('topicState')
@observer
class App extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
    this.numberAdd = this.numberAdd.bind(this)
    this.numberCut = this.numberCut.bind(this)
  }
  componentDidMount() {
    // do something
  }
  changeName(e) {
    this.props.appState.changeName(e.target.value)
  }
  numberAdd() {
    console.log(this.props.topicState.topicName = '已经被更改了')
    this.props.appState.add(2)
  }
  numberCut() {
    console.log(this.props.topicState.topicName)
    this.props.appState.cut(1)
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h1 className="app-title">Welcome to React</h1>
        </header>
        <Button raised color="accent" onClick={this.numberCut}>-</Button>
        <div>
          <input type="text" onChange={this.changeName} />
          <br />
          <Button raised color="primary" onClick={this.numberAdd}>+</Button>
          <p> {this.props.appState.msg} </p>
          <p> {this.props.topicState.sayName} </p>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  appState: PropTypes.instanceOf(AppState),
  topicState: PropTypes.instanceOf(TopicState)
}

export default App;
