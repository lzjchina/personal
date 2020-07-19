import React from "react";
import "../Home.scss";
import { Row, Col } from "antd";
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const PopularContent = () => {
  return (
    <div className="PopularContent">
      <div className="title">
        <div className="name"></div>
        <div className="name_en"></div>
      </div>
      <main className="mainCard">
        <Row justify="space-between" className="cardRow">
          {numbers.map((items, index) => (
            <Col span={6} key={index}>
              <div className="cards">
                <img
                  src={require("@/assets/img/bg/top_pic01@2x.png")}
                  alt=""
                />
                <p>
                  移动应用体验与桌面体验的不同之处在于，用户与应用的互动并不总是在同一位置...
                </p>
                <div className="hoverBg"></div>
                <div className="btn">点击阅读</div>
              </div>
            </Col>
          ))}
        </Row>
      </main>
    </div>
  );
};

export default PopularContent;
