import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Login from '../components/common/Login';

class MRoute extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route component={NoMatch}/>
        </Switch>
      </Router>
    );
  }
}

export default MRoute;