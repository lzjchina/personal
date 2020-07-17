import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Layout from "../layout/index";

const BasicRoute = () => (
  <Router>
    <Switch>
      <Route path="/" component={Layout}></Route>
    </Switch>
  </Router>
);

export default BasicRoute;
