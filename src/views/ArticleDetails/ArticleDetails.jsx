import React, { Component } from "react";
import "./ArticleDetails.scss";
import ReactMarkdown from "react-markdown";
import CodeBlock from "@/utils/CodeBlock";
import MarkNav from "markdown-navbar";
import "markdown-navbar/dist/navbar.css";
import { Anchor, Affix } from "antd";
import ZanArticle from "./components/ZanArticle";
import SendComment from "./components/sendComment";
import Comment from "./components/Comment";

export class ArticleDetails extends Component {
  constructor() {
    super();
    this.state = {
      editorValue: "# 123",
      Modalvisible: false,
    };
  }
  showModal() {
    this.setState({ Modalvisible: true });
  }
  hideModal() {
    this.setState({ Modalvisible: false });
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
                  code: CodeBlock,
                }}
                escapeHtml={false}
              ></ReactMarkdown>
              <ZanArticle showModal={() => this.showModal()}></ZanArticle>
            </div>
            <Comment showModal={() => this.showModal()}></Comment>
          </div>
          <Affix offsetTop={66}>
            <Anchor>
              <h3 className="catalog">目录</h3>
              <MarkNav className="navigation" source={this.state.editorValue} />
            </Anchor>
          </Affix>
          <SendComment
            Modalvisible={this.state.Modalvisible}
            hideModal={() => this.hideModal()}
          ></SendComment>
        </main>
      </div>
    );
  }
}

export default ArticleDetails;
