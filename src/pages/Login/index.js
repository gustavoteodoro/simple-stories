import React, { Component } from 'react';

import LoginForm from '../../modules/LoginForm';

import {
    LoginContainer,
    LoginContent,
} from './styles';

class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <LoginContent>
          <LoginForm />
        </LoginContent>
      </LoginContainer>
    );
  }
}

export default Login;
