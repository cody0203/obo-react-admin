import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return {
    isLogged: state.authReducer.isLogged
  };
}

const Auth = WrappedComponent => {
  const Authenticate = props => {
    const { isLogged } = props;
    const history = useHistory();
    useEffect(() => {
      if (isLogged === false) {
        history.push('/login');
      }
    }, [history, isLogged]);

    return isLogged === true ? (
      <WrappedComponent {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return connect(mapStateToProps)(Authenticate);
};

export default Auth;
