import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const Auth = WrappedComponent => {
  const Authenticate = props => {
    const [isLogged] = useState(localStorage.getItem('logged'));
    const history = useHistory();
    useEffect(() => {
      console.log('a');
      if (isLogged === 'false') {
        history.push('/login');
      }
    }, []);

    console.log(isLogged);
    return isLogged === 'true' ? (
      <WrappedComponent {...props} />
    ) : (
      <Redirect to="/login" />
    );
  };
  return Authenticate;
};

export default Auth;
