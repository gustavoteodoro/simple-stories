import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Input from '../../elements/Input';

import {
  CreateAccountFormContainer,
  CreateAccountFormTitle,
  LinkLogin,
} from './styles';

class CreateAccountForm extends Component {
  render() {
    return (
      <CreateAccountFormContainer>
        <CreateAccountFormTitle>Create account</CreateAccountFormTitle>
        <form>
          <Input type='name' label='Name' required />
          <Input type='email' label='E-mail' required />
          <Input type='password' label='Password' required />
          <Input type='password' label='Confirm password' required />
          <Input type='submit' value='Create account' />
          <LinkLogin>Already have an account? <Link to="/login">Sign in.</Link></LinkLogin>
        </form>
      </CreateAccountFormContainer>
    );
  }
}

export default CreateAccountForm;
