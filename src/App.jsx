import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './screens/shared/Layout';
import NotFoundPage from './screens/shared/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/404" component={NotFoundPage} />
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
