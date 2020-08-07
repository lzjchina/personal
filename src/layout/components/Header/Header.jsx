import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./Header.scss";
import { Menu } from "antd";
import menu from "@/utils/menu";
import { Link } from "react-router-dom";

export class Header extends Component {
  constructor(props) {
    super();
    this.state = {
      current: props.location.pathname,
      showBg: false,
      path: props.location.pathname
    };
    this.timer = null;
    this.current = props.location.pathname;
  }
  handleClick = e => {
    // console.log("click ", e);
    this.setState({ current: e.key });
    this.current = e.key;
    this.handleBg();
  };
  handleBg(path) {
    if (path === "/blog") {
      this.setState({ showBg: false });
    } else {
      this.setState({ showBg: true });
    }
    window.onscroll = () => {
      if (path === "/blog") {
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
  debounce(dalay, Fn) {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    const _this = this;
    return function () {
      let args = arguments;
      if (_this.timer) clearTimeout(_this.timer);
      _this.timer = setTimeout(() => {
        Fn.apply(_this, args);
        _this.timer = null;
      }, dalay);
    };
  }
  componentDidUpdate(prevProps, prevState) {
    // 监听路由变化
    if (prevProps.location.pathname !== this.current) {
      this.debounce(500, this.handleBg(this.props.location.pathname));
      this.current = this.props.location.pathname;
    }
  }
  UNSAFE_componentWillMount() {
    this.setState({ current: this.props.location.pathname });
  }
  componentDidMount() {
    this.handleBg(this.props.location.pathname);
  }
  render() {
    const path = this.props.location.pathname;
    // const { current } = this.state;
    const { showBg } = this.state;
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
        style={showBg ? {} : { backgroundColor: "transparent" }}
      >
        <div className="HeaderBox">
          <img src={require("@/assets/img/logo.png")} className="logo" alt="" />
          <nav>
            <Menu
              onClick={this.handleClick}
              selectedKeys={[path]}
              mode="horizontal"
              style={MenuStyle}
            >
              {menu.map(items => (
                <Menu.Item key={items.path}>
                  <Link to={items.path} className="linkStyle">
                    {items.name}
                  </Link>
                </Menu.Item>
              ))}
            </Menu>
          </nav>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
