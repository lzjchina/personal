import React from "react";
import "../TechnicalCommunity.scss";
import { Card } from "antd";
const { Meta } = Card;
const Main = () => {
  return (
    <main className="mainCont">
      <div className="box">
        <Card hoverable="true" className="items">
          <Meta title="Europe Street beat" className="title" />
          <p>Card content</p>
        </Card>
        <Card hoverable="true" className="items">
          <Meta title="Europe Street beat" className="title" />
          <p>Card content</p>
        </Card>
        <Card hoverable="true" className="items">
          <Meta title="Europe Street beat" className="title" />
          <p>Card content</p>
        </Card>
      </div>
    </main>
  );
};

export default Main;
