import React, { useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import PageRouter from "./PageRouter";
import LoginPage from "../pages/LoginPage";

function RootRouter() {
  const [token, setToken] = useState();

  if (!token) {
    return <LoginPage setToken={setToken} />;
  }
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
