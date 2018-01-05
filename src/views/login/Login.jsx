import React from 'react';
import Helmet from 'react-helmet';
import './login.css';
import '../../static/css/base.css';
import Card from '../../components/Card'

export default class Login extends React.Component {
  constructor() {
    // do somthing
    super()
    this.state = {}
  }

  componentDidMount() {
    // do something
  }

  render() {
    return (
      <div className="Login">
        <Helmet>
          <title>登录</title>
        </Helmet>
        <div className="content">
          <Card />
        </div>
      </div>
    );
  }
}
