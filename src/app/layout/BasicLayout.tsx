import React, { useState, useEffect } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { NavLink, useLocation, Route } from 'react-router-dom';

import classes from './styles.module.css';
import GlobalHeader from '../components/headers';

const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;

const BasicLayout: React.FC = (props: any) => {
  // Initial Declaration
  const location = useLocation();
  // Local States
  const [collapsed, setCollapsed] = useState(false);

  // Method
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <Layout className={classes.Layout}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className={classes.Logo} />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={[location.pathname]}
          >
            <Menu.Item key="/dashboard">
              <NavLink to="/dashboard">
                <Icon type="user" />
                <span>Dashboard </span>
              </NavLink>
            </Menu.Item>
            <SubMenu
              key="products"
              title={
                <span>
                  <Icon type="appstore" />
                  <span>Sản phẩm</span>
                </span>
              }
            >
              <Menu.Item key="/dashboard/products">
                <NavLink to="/dashboard/products">
                  <span>Tất cả sản phẩm </span>
                </NavLink>
              </Menu.Item>

              <Menu.Item key="/dashboard/new-product">
                <NavLink to="/dashboard/new-product">
                  <span>Sản phẩm mới </span>
                </NavLink>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className={classes.Header}>
            <GlobalHeader
              toggleCollapsed={toggleCollapsed}
              collapsed={collapsed}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
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

export const DashboardLayout = (props: any) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={matchProps => {
        return (
          <BasicLayout>
            <Component {...matchProps} />
          </BasicLayout>
        );
      }}
    />
  );
};
