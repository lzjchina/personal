import React, { Component } from "react";
// import { Anchor } from "antd";
import Editor from "for-editor";
// import ReactMarkdown from "react-markdown";
// import CodeBlock from "@/utils/CodeBlock";
// import MarkNav from "markdown-navbar";
// import "markdown-navbar/dist/navbar.css";

export class test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: "# 2324",
      articleDetail: ""
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

  render() {
    return (
      <div>
        <Editor
          className="my-editor"
          subfield={true}
          preview={true}
          value={this.state.editorValue}
          onChange={value => this.handleChange(value)}
          onSave={value => this.HandleSave(value)}
        />
        {/* <ReactMarkdown
          source={this.state.editorValue}
          renderers={{
            code: CodeBlock
          }}
          escapeHtml={false}
        ></ReactMarkdown>
        <Anchor>
          <div className="markNav-title">文章目录</div>
          <MarkNav className="navigation" source={this.state.editorValue} />
        </Anchor> */}
      </div>
    );
  }
}

export default test;
