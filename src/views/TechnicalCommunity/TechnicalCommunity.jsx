import React, { Component } from "react";
import "./TechnicalCommunity.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";

class TechnicalCommunity extends Component {
  constructor() {
    super();
    this.state = {};
  }
  // componentDidMount() {
  //   console.log(this);
  // }
  render() {
    return (
      <div className="TechnicalCommunity">
        <div className="topSection">
          <div className="cont">
            <div className="contentImg"></div>
            <div className="iconImg"></div>
          </div>
        </div>
        <Nav></Nav>
        <Main history={this.props.history}></Main>
      </div>
    );
  }
}

export default TechnicalCommunity;
