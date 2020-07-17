import React, { Component } from "react";
import "./Home.scss";

export class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className="topSection">
          <div className="main">
            <img src={require('@/assets/img/bg/home_icon.png')} alt=""/>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;
