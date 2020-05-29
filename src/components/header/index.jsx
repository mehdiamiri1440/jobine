import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileHeader from './profileHeader'
import MainHeader from './mainHeader';

const Headers = _ => {
   return (
      <Switch>
         <Route path="/profile" render={routeProps => <ProfileHeader {...routeProps} />} />
         <Route path="/" component={MainHeader} />
      </Switch>
   );
};

export default Headers;
