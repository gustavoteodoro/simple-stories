import React, { Component } from 'react';

import CreateAccountForm from '../../modules/CreateAccountForm';

import {
    CreateAccountContainer,
    CreateAccountContent,
} from './styles';

class CreateAccount extends Component {
  render() {
    return (
      <CreateAccountContainer>
        <CreateAccountContent>
          <CreateAccountForm />
        </CreateAccountContent>
      </CreateAccountContainer>
    );
  }
}

export default CreateAccount;
