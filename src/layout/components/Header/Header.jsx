import React, { Component } from "react";
import "./Header.scss";
import { Menu } from "antd";
import menu from "@/utils/menu";
import { Link } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: "/",
      showBg: false,
      path: props.location.pathname,
    };
  }
  handleClick = (e) => {
    // console.log("click ", e);
    this.setState({ current: e.key });
    this.handleBg();
  };
  handleBg(path) {
    if (path === "/") {
      this.setState({ showBg: false });
    } else {
      this.setState({ showBg: true });
    }
    window.onscroll = () => {
      if (path === "/") {
        if (document.documentElement.scrollTop > 150) {
          this.setState({ showBg: true });
        } else {
          this.setState({ showBg: false });
        }
      } else {
        this.setState({ showBg: true });
      }
    };
  }
  UNSAFE_componentWillMount() {
    this.setState({ current: this.props.location.pathname });
  }
  componentDidMount() {
    this.handleBg(this.props.location.pathname);
  }
  render() {
    const { current } = this.state;
    const { showBg } = this.state;
    const MenuStyle = {
      backgroundColor: "transparent",
      border: 0,
      height: "51px",
      lineHeight: "51px",
      color: "#fff",
    };
    return (
      <div
        className="HeaderDiv"
        style={showBg ? {} : { backgroundColor: "transparent" }}
      >
        <div className="HeaderBox">
          <img src={require("@/assets/img/logo.png")} className="logo" alt="" />
          <nav>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[current]}
              mode="horizontal"
              style={MenuStyle}
            >
              {menu.map((items) => (
                <Menu.Item key={items.path}>
                  <Link to={items.path} className="linkStyle">
                    {items.name}
                  </Link>
                </Menu.Item>
              ))}
              {/* 
              <Menu.Item key="app">
                <Link to="/technicalCommunity" className="linkStyle">
                  技术社区
                </Link>
              </Menu.Item>
              <Menu.Item key="alipay">
                <Link to="/siteNav" className="linkStyle">
                  网站导航
                </Link>
              </Menu.Item> */}
            </Menu>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
