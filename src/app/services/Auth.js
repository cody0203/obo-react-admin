import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

export default function Auth(WrappedComponent) {
  class Authenticate extends Component {
    render() {
      return (
        <div>
          {localStorage.getItem('logged') === 'true' ? (
            <WrappedComponent {...this.props} />
          ) : (
            <Redirect to="/login" />
          )}
        </div>
      );
    }
  }
  return Authenticate;
}
