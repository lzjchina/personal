import React, { Component } from "react";
import "./ArticleDetails.scss";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/utils/CodeBlock";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { Anchor } from "antd";

export class ArticleDetails extends Component {
  constructor() {
    super();
    this.state = {
      editorValue: JSON.parse(sessionStorage.getItem("test"))
    };
  }
  render() {
    return (
      <div className="ArticleDetails">
        <main>
          <div>
            <ReactMarkdown
              source={this.state.editorValue}
              renderers={{
                code: CodeBlock
              }}
              escapeHtml={false}
            ></ReactMarkdown>
          </div>
          <Anchor>
            <MarkNav className="navigation" source={this.state.editorValue} />
          </Anchor>
        </main>
      </div>
    );
  }
}

export default ArticleDetails;
