import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import Input from '../../elements/Input';

import {
  CreateAccountFormContainer,
  CreateAccountFormTitle,
  LinkLogin,
} from './styles';

class CreateAccountForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/create-account', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password
      })
    }).then(window.location.href = '/login');
  }

  render() {
    return (
      <CreateAccountFormContainer>
        <CreateAccountFormTitle>Create account</CreateAccountFormTitle>
        <form onSubmit={this.handleSubmit}>
          <Input type='name' label='Name' onChange={(e) => this.setState({name: e.target.value})} required />
          <Input type='email' label='E-mail' onChange={(e) => this.setState({email: e.target.value})} required />
          <Input type='password' label='Password' onChange={(e) => this.setState({password: e.target.value})} required />
          <Input type='password' label='Confirm password' required />
          <Input type='submit' value='Create account' />
          <LinkLogin>Already have an account? <Link to="/login">Sign in.</Link></LinkLogin>
        </form>
      </CreateAccountFormContainer>
    );
  }
}

export default CreateAccountForm;
