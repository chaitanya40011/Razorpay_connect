import React from "react";
import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Payment from "./components/payment";
import Success from "./components/success";
import Failure from "./components/failure";

export default App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Payment />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/failure">
          <Failure />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
