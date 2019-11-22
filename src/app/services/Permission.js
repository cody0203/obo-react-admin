import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    authStatus: state.authReducer.authStatus
  };
}

const Permission = WrappedComponent => {
  const PermissionChecker = props => {
    const { authStatus } = props;
    const history = useHistory();
    useEffect(() => {
      if (authStatus.role === 'user') {
        history.push('/dashboard');
      }
    }, [history, authStatus]);

    return authStatus.role === 'admin' ? (
      <WrappedComponent {...props} />
    ) : (
      <Redirect to="/dashboard" />
    );
  };
  return connect(mapStateToProps)(PermissionChecker);
};

export default Permission;
