import React, { Component, Fragment } from 'react';
import AppRouter from '../../routes/router';
import SideMenu from '../../components/sideMenu';
import Header from '../../components/header';
import Footer from '../../components/footer';
class Layout extends Component {


  render() {
    return (
      <Fragment>
        <Header {...this.props} />
        <div className="col-12 d-flex main-content p-0">
          {/* <div className="col-2 border-left p-0 menu-bg">
            <SideMenu />
          </div>
          <div className="col-10"> 
            <div className="row">*/}
              <AppRouter />
            {/* </div>
          </div> */}
        </div>
        <Footer {...this.props} />
      </Fragment>
    );
  }
}

export default Layout;
