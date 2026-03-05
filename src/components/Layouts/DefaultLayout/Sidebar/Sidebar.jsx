import styles from "./styles.scss";
import logo_user from "../../../../asset/logo/capoo-gaming.gif";
import setting from "../../../../asset/icon/setting.svg";
import add from "../../../../asset/icon/add-circle.svg";
import close from "../../../../asset/icon/close-circle.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import linkedin from "../../../../asset/icon/linkedin.png";
import github from "../../../../asset/icon/github.png";
import { Flex, Layout, Menu } from "antd";

import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  MenuOutlined,
} from "@ant-design/icons";
const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const items = [
    {
      key: "menu",
      icon: <MenuOutlined />,
      label: "Menu",
      children: [
        { key: "home", label: <Link to={"/"}>HOME</Link> },
        { key: "portfolio", label: <Link to={"/portfolio"}>PORTFOLIO</Link> },
        { key: "about", label: <Link to={"/about"}>ABOUT</Link> },
        { key: "contact", label: <Link to={"/contact"}>CONTACT</Link> },
      ],
    },
    {
      key: "social-network",
      label: "Social Network",
      icon: <SettingOutlined />,

      children: [
        {
          key: "linked",
          label: (
            <a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-t%E1%BA%A5n-thanh/">
              Linked
            </a>
          ),
        },
        {
          key: "github",
          label: (
            <a href="https://github.com/tanthanh511?tab=repositories">Github</a>
          ),
        },
      ],
    },
  ];

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      className="sidebar"
    >
      <img classNam="logo_user no-hover-effect" src={logo_user} alt="" />
      <Menu
        theme="dark"
        defaultSelectedKeys={["home"]}
        mode="vertical"
        items={items}
      />
    </Sider>
  );
};

export default Sidebar;
