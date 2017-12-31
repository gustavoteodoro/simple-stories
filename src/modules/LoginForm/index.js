import React, { Component } from 'react';

import Input from '../../elements/Input';
import Button from '../../elements/Button';

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
          <Button to="/create-account" text="Create account" />
        </form>
      </LoginFormContainer>
    );
  }
}

export default LoginForm;
