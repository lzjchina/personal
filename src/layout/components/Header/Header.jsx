import React, { Component } from "react";
import "./Header.scss";
import { Menu } from "antd";

export class Header extends Component {
  constructor() {
    super();
    this.state = {
      current: "mail"
    };
  }
  handleClick = e => {
    console.log("click ", e);
    this.setState({ current: e.key });
  };
  render() {
    const { current } = this.state;
    const MenuStyle = {
      backgroundColor: "transparent",
      border: 0,
      height: "51px",
      lineHeight: "51px",
      color: "#fff"
    };
    return (
      <div
        className="HeaderDiv"
        style={
          this.props.props.match.path === "/" && {
            backgroundColor: "transparent"
          }
        }
      >
        <div className="HeaderBox">
          <img
            src={require("@/assets/img/logo.png")}
            className="logo"
            alt=""
          />
          <nav>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={MenuStyle}
            >
              <Menu.Item key="mail">Navigation One</Menu.Item>
              <Menu.Item key="app"> Two</Menu.Item>
              <Menu.Item key="alipay">Navigation alipay</Menu.Item>
            </Menu>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
