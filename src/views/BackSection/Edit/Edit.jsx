import React, { Component } from "react";
import Editor from "for-editor";
import "./Edit.scss";
import { Input, Popover, Tag, Button } from "antd";
import { CaretUpOutlined } from "@ant-design/icons";

export class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: "",
      articleDetail: "",
      titltName: "",
      visible: false,
      classification: [
        {
          type: 0,
          name: "热门"
        },
        {
          type: 1,
          name: "推荐"
        }
      ],
      tags: [
        {
          id: 0,
          name: "vue"
        },
        {
          id: 1,
          name: "react"
        },
        {
          id: 2,
          name: "node"
        },
        {
          id: 3,
          name: "css"
        },
        {
          id: 4,
          name: "javaScript"
        },
        {
          id: 5,
          name: "Mysql"
        }
      ],
      classificationType: null,
      tagsId: null
    };
  }
  handleChange(value) {
    this.setState({
      editorValue: value
    });
    sessionStorage.setItem("test", JSON.stringify(value));
  }
  HandleSave(value) {
    console.log(value);
  }
  // 标题输入
  handleTitleName(event) {
    this.setState({ titltName: event.target.value });
  }

  hide = () => {
    this.setState({
      visible: false
    });
  };
  handleVisibleChange = visible => {
    this.setState({ visible });
  };
  // 选择分类
  handleClassification(type) {
    if (this.state.classificationType === type) {
      this.setState({ classificationType: null });
    } else {
      this.setState({ classificationType: type });
    }
  }
  // 选择标签
  handleTagsId(id) {
    if (this.state.tagsId === id) {
      this.setState({ tagsId: null });
    } else {
      this.setState({ tagsId: id });
    }
  }
  render() {
    const content = (
      <div className="publishMain">
        <h2>发布文章</h2>
        <div
          style={{
            width: "260px"
          }}
        >
          <h4>分类</h4>
          {this.state.classification.map(items => (
            <Tag
              color={this.state.classificationType === items.type && "blue"}
              key={items.type}
              style={{ marginBottom: "5px", cursor: "pointer" }}
              onClick={() => this.handleClassification(items.type)}
            >
              {items.name}
            </Tag>
          ))}
        </div>
        <div
          style={{
            width: "260px"
          }}
        >
          <h4>标签</h4>
          {this.state.tags.map(items => (
            <Tag
              color={this.state.tagsId === items.id && "blue"}
              key={items.id}
              style={{ marginBottom: "5px", cursor: "pointer" }}
              onClick={() => this.handleTagsId(items.id)}
            >
              {items.name}
            </Tag>
          ))}
        </div>
        <div
          className="publishButton"
          style={{
            padding: "10px 0 0 0",
            display: "flex",
            justifyContent: "center"
          }}
        >
          <Button type="primary">确认发布</Button>
        </div>
      </div>
    );
    return (
      <div className="EditorCont">
        <header className="topBox">
          <div className="left">
            <Input
              placeholder="输入文章标题..."
              value={this.state.titltName}
              onChange={event => this.handleTitleName(event, 123)}
            />
          </div>
          <div className="right">
            <Popover
              content={content}
              trigger="click"
              visible={this.state.visible}
              onVisibleChange={this.handleVisibleChange}
              placement="topLeft"
              arrowPointAtCenter
            >
              <div className="publishBtn">
                <span className="text">发布</span>
                <CaretUpOutlined
                  className={this.state.visible ? "" : "rotateIcon"}
                />
              </div>
            </Popover>
          </div>
        </header>
        <Editor
          className="my-editor"
          subfield={true}
          preview={true}
          value={this.state.editorValue}
          onChange={value => this.handleChange(value)}
          onSave={value => this.HandleSave(value)}
        />
      </div>
    );
  }
}

export default Edit;
