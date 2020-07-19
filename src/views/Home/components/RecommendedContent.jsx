import React from "react";
import "../Home.scss";
import { Row, Col } from "antd";

const RecommendedContent = () => {
  return (
    <div className="RecommendedContent">
      <div className="title">
        <div className="name"></div>
        <div className="name_en"></div>
      </div>
      <main className="mainCard">
        <Row justify="space-between" gutter="30" className="cardRow">
          <Col span={8}>
            <div className="cards">
              <img src={require("@/assets/img/bg/re_pic01.png")} alt="" />
              <div className="textSection">
                <h3>Android学习之详解Activity的生命周期</h3>
                <p>
                  移动应用体验与桌面体验的不同之处在于，用户与应用的互动并不总是在同一位置...
                </p>
                <div className="btn">点击阅读</div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="cards">
              <img src={require("@/assets/img/bg/re_pic02.png")} alt="" />
              <div className="textSection">
                <h3>Android学习之详解Activity的生命周期</h3>
                <p>
                  移动应用体验与桌面体验的不同之处在于，用户与应用的互动并不总是在同一位置...
                </p>
                <div className="btn">点击阅读</div>
              </div>
            </div>
          </Col>
          <Col span={8}>
            <div className="cards">
              <img src={require("@/assets/img/bg/re_pic03.png")} alt="" />
              <div className="textSection">
                <h3>Android学习之详解Activity的生命周期</h3>
                <p>
                  移动应用体验与桌面体验的不同之处在于，用户与应用的互动并不总是在同一位置...
                </p>
                <div className="btn">点击阅读</div>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
};

export default RecommendedContent;
