import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Affix } from "antd";
import test from "@/views/test/test";
import Home from "@/views/Home/index";
import Header from "./components/Header/Header";

export class Layout extends Component {
  render() {
    const mt56 = {
      marginTop: "-56px"
    };
    return (
      <div>
        <header>
          <Affix offsetTop="0">
            <Header props={this.props} />
          </Affix>
        </header>
        <main style={this.props.match.path === "/" && mt56}>
          <Route exact path="/" component={Home}></Route>
          <Route path="/test" component={test}></Route>
        </main>
      </div>
    );
  }
}

export default Layout;
