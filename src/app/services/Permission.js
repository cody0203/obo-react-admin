import React from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    authStatus: state.authReducer.authStatus
  };
}

const Permission = WrappedComponent => {
  const PermissionChecker = props => {
    const { authStatus } = props;

    return authStatus.role === 'admin' ? (
      <WrappedComponent {...props} />
    ) : (
      <div>Bạn không có quyền</div>
    );
  };
  return connect(mapStateToProps)(PermissionChecker);
};

export default Permission;
