import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import NewProfile from './NewProfile';
import NotFound from './NotFound';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/profile/new" component={NewProfile} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;