import React, { Component } from 'react';
// 指定prop的类型
import PropTypes from 'prop-types';
import {
  observer,
  inject
} from 'mobx-react';
import Container from '../../components/Container';
import Button from 'material-ui/Button';
import { TestState } from '../../store/store';
import logo from '../../static/images/logo.png';
import './test.css';

@inject( stores => {
  return {
    testState: stores.testState
  }
}) @observer
export default class Test extends Component {
  constructor() {
    super()
    this.changeName = this.changeName.bind(this)
    this.add = this.add.bind(this)
    this.cut = this.cut.bind(this)
  }
  componentDidMount() {
    // do something
  }
  changeName(e) {
    this.props.testState.changeName(e.target.value)
  }
  add() {
    this.props.testState.add(1)
  }
  cut() {
    this.props.testState.cut(1)
  }

  render() {
    return (
      <Container>
        <div className="app">
          <header className="app-header">
            <img src={logo} className="app-logo" alt="logo" />
            <h1 className="app-title">Welcome to React</h1>
          </header>
          <div>
            <Button raised color="primary" onClick={this.add}>上涨</Button>
            <p><input type="text" onChange={this.changeName} /></p>
            <Button raised color="accent" onClick={this.cut}>下降</Button>
            <p> {this.props.testState.msg} </p>
          </div>
        </div>
      </Container>
    )
  }
}

Test.propTypes = {
  testState: PropTypes.instanceOf(TestState)
  // testState: PropTypes.object.isRequired
}
