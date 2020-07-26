import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined } from "@ant-design/icons";

const listData = [];
for (let i = 0; i < 23; i++) {
  listData.push({
    href: "https://ant.design",
    title: `ant design part ${i}`,
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description:
      "Ant Design, a design language for background applications, is refined by Ant UED Team.",
    content:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
  });
}

const Comment = (props) => {
  return (
    <div className="Comment">
      <div className="header">
        <div className="line"></div>
        <span>评论 1212</span>
      </div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <Space>
                <LikeOutlined />
                <span>123</span>
              </Space>,
              <Space onClick={props.showModal}>
                <MessageOutlined />
                <span>123</span>
              </Space>,
            ]}
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {/* {item.content} */}
          </List.Item>
        )}
      />
    </div>
  );
};

export default Comment;
