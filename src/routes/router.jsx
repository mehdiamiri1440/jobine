import React, { Fragment } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { routes } from './routes';
import './router.scss';
import Header from '../components/header';
import Footer from '../components/footer';


const routeList = [...routes];

class Router extends React.Component {
  render() {
    return (
      <Fragment>
      <Route path="/" render={(props) =>
          <Header {...props} />
        } />
      <Switch>
        {routeList.map((route, routeIndex) => {
          return <Route key={routeIndex} exact={!!route.exact} path={route.path} component={route.component} />;
        })}
      </Switch>
      <Route path="/" render={(props) =>
          <Footer {...props} />
        } />
        </Fragment>
    );
  }
}


export default (withRouter(Router));
