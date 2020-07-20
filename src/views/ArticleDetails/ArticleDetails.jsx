import React, { Component } from "react";
import "./ArticleDetails.scss";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/utils/CodeBlock";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { Anchor, Affix } from "antd";

export class ArticleDetails extends Component {
  constructor() {
    super();
    this.state = {
      editorValue: JSON.parse(sessionStorage.getItem("test")) || "# 123"
    };
  }
  render() {
    return (
      <div className="ArticleDetails">
        <main>
          <div className="articleSection">
            <div className="articleText">
              <h3 className="articleName">vue 生成二维码</h3>
              <div className="metaBox">
                <div>
                  <i className="timeIcon"></i>
                  <span>上传时间：2020.09.20</span>
                </div>
                <div>
                  <i className="lookIcon"></i>
                  <span>阅读：1093993</span>
                </div>
              </div>
              <ReactMarkdown
                source={this.state.editorValue}
                renderers={{
                  code: CodeBlock
                }}
                escapeHtml={false}
              ></ReactMarkdown>
              
            </div>
          </div>
          <Affix offsetTop={66}>
            <Anchor>
              <h3 className="catalog">目录</h3>
              <MarkNav className="navigation" source={this.state.editorValue} />
            </Anchor>
          </Affix>
        </main>
      </div>
    );
  }
}

export default ArticleDetails;
