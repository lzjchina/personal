import React, { Component } from "react";
import "./Home.scss";
import RecommendedContent from "./components/RecommendedContent";
import PopularContent from "./components/PopularContent";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <section className="topSection">
          <div className="main">
            <div className="home_title_cn"></div>
            <div className="home_title"></div>
            <div className="moreBtn">了解更多</div>
            <div className="homeIcon"></div>
          </div>
        </section>
        <RecommendedContent></RecommendedContent>
        <PopularContent></PopularContent>
      </div>
    );
  }
}

export default Home;
