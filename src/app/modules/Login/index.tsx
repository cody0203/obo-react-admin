import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { Card } from "antd";
import { Form, Icon, Input, Button, Checkbox } from "antd";

import classes from "./styles.module.css";

const Login = (props: any) => {
  const history = useHistory();
  const { getFieldDecorator } = props.form;

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.form.validateFields((err: any, values: any) => {
      console.log(values);
      if (values.username === "admin" && values.password === "admin") {
        history.push("/");
      }
    });
  };

  return (
    <Card className={classes.Login}>
      <h1 className={classes.Header}>Login</h1>

      <Form onSubmit={handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("username", {
            rules: [{ required: true, message: "Please input your username!" }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    </Card>
  );
};

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(Login);

export default WrappedNormalLoginForm;
