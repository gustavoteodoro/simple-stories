import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

import Input from '../../elements/Input';

import {
  LoginFormContainer,
  LoginFormTitle,
} from './styles';

class LoginForm extends Component {
  render() {
    return (
      <LoginFormContainer>
        <LoginFormTitle>Let's tell stories!</LoginFormTitle>
        <form>
          <Input type='email' label='E-mail' required />
          <Input type='password' label='Password' required />
          <Input type='submit' value='Login' />
          <Link to="/create-account">Create account</Link>
        </form>
      </LoginFormContainer>
    );
  }
}

export default LoginForm;
