import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import App from '../views/app/App'
import Login from '../views/login/Login'
import List from '../views/list/List'

export default () => [
  <Route path="/" render={() => <Redirect to="/app" />} exact key="first" />,
  <Route path="/app" component={App} key="app" />,
  <Route path="/login" component={Login} key="login" />,
  <Route path="/list" component={List} key="list" />,
]
