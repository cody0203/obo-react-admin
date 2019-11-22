import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Card } from 'antd';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { authHandler } from '../../actions/auth';
import classes from './styles.module.css';

function mapDispatchToProps(dispatch: any) {
  return {
    authHandler: (type: any) => dispatch(authHandler(type))
  };
}

function mapStateToProps(state: any) {
  return {
    authStatus: state.authReducer.authStatus
  };
}

const Login = (props: any) => {
  const history = useHistory();
  const { getFieldDecorator } = props.form;
  const { authHandler, authStatus } = props;

  useEffect(() => {
    if (authStatus.isLogged) {
      history.push('/');
    }
  }, [authStatus, history]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      if (values.username === 'admin' && values.password === 'admin') {
        history.push('/');
        authHandler({
          isLogged: true,
          role: 'admin'
        });
      }

      if (values.username === 'user' && values.password === 'user') {
        history.push('/');
        authHandler({
          isLogged: true,
          role: 'user'
        });
      }
    });
  };

  return (
    <Card className={classes.Login}>
      <h1 className={classes.Header}>Login</h1>

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Please input your username!' }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="#a">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="#a">register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
};

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WrappedNormalLoginForm);
