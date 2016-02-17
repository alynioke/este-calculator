import App from './app/App.react';
import React from 'react';
import {IndexRoute, Route} from 'react-router';
import AddLoan from './components/addLoan/Page.react';
import ViewLoans from './components/viewLoans/Page.react';

export default function createRoutes() {
  // <Route component={Todos} path="todos" />
  return (
    <Route component={App} path="/">
      <IndexRoute component={AddLoan} />
      <Route component={ViewLoans} path="view-loans"/>
    </Route>
  );

}
