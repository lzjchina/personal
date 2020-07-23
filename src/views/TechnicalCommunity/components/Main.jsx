import React from "react";
import "../TechnicalCommunity.scss";
import { Card } from "antd";
const { Meta } = Card;

const Main = props => {
  const goDetails = id => {
    console.log(props);
    console.log(id);
    props.history.push("/blog/articleDetails/" + id);
  };
  return (
    <main className="mainCont">
      <div className="box">
        <Card hoverable="true" className="items" onClick={() => goDetails(1)}>
          <Meta title="Europe Street beat" className="title" />
          <p>Card content</p>
        </Card>
        <Card hoverable="true" className="items" onClick={() => goDetails(2)}>
          <Meta title="Europe Street beat" className="title" />
          <p>Card content</p>
        </Card>
        <Card hoverable="true" className="items" onClick={() => goDetails(3)}>
          <Meta title="Europe Street beat" className="title" />
          <p>Card content</p>
        </Card>
      </div>
    </main>
  );
};

export default Main;
