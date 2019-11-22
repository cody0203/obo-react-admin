import React from 'react';
import { Menu, Dropdown, Icon } from 'antd';
import { connect } from 'react-redux';
import classes from './index.module.css';
import { authHandler } from '../../actions/auth';

function mapDispatchToProps(dispatch: any) {
  return {
    authHandler: (type: any) => dispatch(authHandler(type))
  };
}

const GlobalHeader = (props: any) => {
  // Props
  const { collapsed, toggleCollapsed, authHandler } = props;

  const logout = () => {
    authHandler(false);
  };

  // Account dropdown
  const Account = (
    <Menu>
      <Menu.Item>
        <span>Thông tin tài khoản</span>
      </Menu.Item>
      <Menu.Item onClick={logout}>
        <span>Thoát</span>
      </Menu.Item>
    </Menu>
  );

  // Logout

  return (
    <>
      <Icon
        className={classes.Trigger}
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
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

export default connect(null, mapDispatchToProps)(GlobalHeader);
