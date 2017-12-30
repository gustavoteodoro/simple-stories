import React, { Component } from 'react';

import Input from '../../elements/Input';

import {
  LoginFormContainer,
} from './styles';

class LoginForm extends Component {
  render() {
    return (
      <LoginFormContainer>
        <form>
          <Input type='email' label='E-mail' required />
          <Input type='password' label='Password' required />
          <Input type='submit' value='Login' />
        </form>
      </LoginFormContainer>
    );
  }
}

export default LoginForm;
