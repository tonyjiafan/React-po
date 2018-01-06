import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import App from '../views/app/App'
import List from '../views/list/List'
import Detail from '../views/detail/Detail'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/app" component={App} key="app" />,
  <Route path="/list" component={List} key="list" />,
  <Route path="/detail/:id" component={Detail} key="detail" />,
]
