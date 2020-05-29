import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Layout from './screens/shared/Layout';
import NotFoundPage from './screens/shared/NotFoundPage';
import LoginPage from './screens/auth/login';
import SignUp from './screens/auth/signUp';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/signUp" component={SignUp} />
          <Route path="/404" component={NotFoundPage} />
          <Route path="/" component={Layout} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
