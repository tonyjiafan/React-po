import React from 'react';
import {
  Route,
  Redirect,
} from 'react-router-dom';

import Test from '../views/test/Test'
import List from '../views/list/List'
import Detail from '../views/detail/Detail'

export default () => [
  <Route path="/" render={() => <Redirect to="/list" />} exact key="first" />,
  <Route path="/test" component={Test} key="app" />,
  <Route path="/list" component={List} key="list" />,
  <Route path="/detail/:id" component={Detail} key="detail" />,
]
