import React, { useState, useEffect } from "react";
import { Layout, Menu, Icon } from "antd";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./styles.module.css";
const { Header, Sider, Content } = Layout;

const BasicLayout: React.FC = props => {
  // Initial Declaration
  const location = useLocation();
  console.log([location.pathname]);
  // Local States
  const [collapsed, setCollapsed] = useState(false);

  // Method
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Layout className={classes.layout}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={classes.logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
          >
            <Menu.Item key="/">
              <NavLink to="/">
                <Icon type="user" />
                <span>Dashboard </span>
              </NavLink>
            </Menu.Item>
            <Menu.Item key="/products">
              <NavLink to="/products">
                <Icon type="video-camera" />
                <span>Products </span>
              </NavLink>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Icon
              className={classes.trigger}
              type={collapsed ? "menu-unfold" : "menu-fold"}
              onClick={toggleCollapsed}
            />
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
              minHeight: 280
            }}
          >
            {props.children}
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default BasicLayout;
