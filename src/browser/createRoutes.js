import App from './app/App.react';
import React from 'react';
import {IndexRoute, Route, Redirect} from 'react-router';
import AddLoan from './components/addLoan/Page.react';
import ViewLoans from './components/viewLoans/Page.react';
import ViewLoan from './components/viewLoan/Page.react';
import AnyPage from './components/anyPage/Page.react';

export default function createRoutes() {
  return (
    <Route component={App} path="/">
      <IndexRoute component={AddLoan} />
      <Route component={ViewLoans} path="/view-loans"/>
      <Route component={ViewLoan} path="/view-loans/:id"/>
      <Route component={AnyPage} path="/any-page/:param1/:param2" />
      <Redirect from="/old-any-page/:param1/:param2" to="/any-page/:param1/:param2" />
    </Route>
  );
}
