import React, { useState } from "react";

const ZanArticle = (props) => {
  const [zanImg, setZanImg] = useState(
    require("../../../assets/img/icon/zan_nor.png")
  );
  const HandleZan = () => {
    setZanImg(require("../../../assets/img/icon/zan_sel.png"));
  };
  return (
    <div className="ZanArticle">
      <div className="zan">
        <img src={zanImg} alt="" onClick={HandleZan} />
        <span>233赞</span>
      </div>
      <div className="sendBtn" onClick={props.showModal}>
        发表评论
      </div>
    </div>
  );
};

export default ZanArticle;
