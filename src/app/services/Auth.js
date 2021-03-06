import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    authStatus: state.authReducer.authStatus
  };
}

const Auth = WrappedComponent => {
  const Authenticate = props => {
    const { authStatus } = props;
    const history = useHistory();
    useEffect(() => {
      if (authStatus.isLogged === false) {
        history.push('/login');
      }
    }, [history, authStatus]);

    return authStatus.isLogged === true ? (
      <WrappedComponent {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return connect(mapStateToProps)(Authenticate);
};

export default Auth;
