import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PageRouter from "./PageRouter";

function RootRouter() {
  return (
    <BrowserRouter basename="/retirement-present">
      <Switch>
        <Route path="/" component={PageRouter} />
        <Redirect path="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default RootRouter;
