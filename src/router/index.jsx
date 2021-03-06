import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Layout from "../layout/index";
import test from "../views/test/test";
import Edit from "../views/BackSection/Edit/Edit";
import TodoList from "../views/TodoList/TodoList";

const BasicRoute = () => (
  <Router>
    <Switch>
      <Route path="/blog" component={Layout}></Route>
      <Route path="/test" component={test}></Route>
      <Route path="/Edit" component={Edit}></Route>
      <Route path="/TodoList" component={TodoList}></Route>
      <Redirect from="/" to="/blog"></Redirect>
    </Switch>
  </Router>
);

export default BasicRoute;
