import React, { Component } from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header/Header";
import test from "@/views/test/test";
import Home from "@/views/Home/index";
import TechnicalCommunity from "@/views/TechnicalCommunity/TechnicalCommunity";
import SiteNav from "@/views/SiteNav/SiteNav";
import ArticleDetails from "@/views/ArticleDetails/ArticleDetails";

export class Layout extends Component {
  render() {
    const mt56 = {
      marginTop: "56px",
      position: "relative",
      zIndex: 0
    };
    const headerStyle = {
      zIndex: 20,
      position: "fixed",
      top: 0,
      width: " 100%"
    };
    const footerStyle = {
      width: "100%",
      height: "35px",
      textAlign: "center",
      lineHeight: "35px",
      backgroundColor: "#0D2541",
      color: "#fff",
      fontSize: "14px"
    };
    return (
      <div style={{ minWidth: "1200px" }}>
        <header style={headerStyle}>
          <Header location={this.props.location} />
        </header>
        <main style={this.props.location.pathname === "/" ? {} : mt56}>
          <Route exact path="/" component={Home}></Route>
          <Route
            path="/technicalCommunity"
            component={TechnicalCommunity}
          ></Route>
          <Route path="/siteNav" component={SiteNav}></Route>
          <Route path="/articleDetails" component={ArticleDetails}></Route>
          <Route path="/test" component={test}></Route>
        </main>
        <footer style={footerStyle}>版权所有&copy;lzjchina</footer>
      </div>
    );
  }
}

export default Layout;
