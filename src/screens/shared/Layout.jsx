import React, { Component, Fragment } from 'react';
import AppRouter from '../../routes/router';

class Layout extends Component {
  state = {
  };

  componentDidMount() {
  }

  render() {

    return (
      <Fragment>
        <AppRouter />
      </Fragment>
    );
  }
}

export default (Layout);
