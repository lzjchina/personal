import React, { Component } from "react";
import "./TechnicalCommunity.scss";
import Nav from "./components/Nav";
import Main from "./components/Main";

export class TechnicalCommunity extends Component {
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
        <Main></Main>
      </div>
    );
  }
}

export default TechnicalCommunity;
