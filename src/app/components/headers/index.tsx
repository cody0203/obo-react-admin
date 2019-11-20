import React from "react";
import { Menu, Dropdown, Icon } from "antd";
import classes from "./index.module.css";

const GlobalHeader = (props: any) => {
  // Props
  const { collapsed, toggleCollapsed } = props;
  // Account dropdown
  const Account = (
    <Menu>
      <Menu.Item>
        <a>Thông tin tài khoản</a>
      </Menu.Item>
      <Menu.Item>
        <a>Thoát</a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Icon
        className={classes.Trigger}
        type={collapsed ? "menu-unfold" : "menu-fold"}
        onClick={toggleCollapsed}
      />
      <div className={classes.Account}>
        <Dropdown overlay={Account}>
          <div>Cody</div>
        </Dropdown>
      </div>
    </>
  );
};

export default GlobalHeader;
