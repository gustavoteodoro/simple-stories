import React, { Component } from 'react';

import Input from '../../elements/Input';
import Button from '../../elements/Button';

import {
  LoginFormContainer,
  LoginFormTitle,
} from './styles';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: '',
      email: '',
      password: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/login', {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.email,
        password: this.state.password
      }),
    }).then(results => {
      if(results.status === 200){
        return results.json()
      } else {
        return results.status;
      }
    }).then(data => {
        if(data.user){
          window.location.href = '/'
        }
    });
  }

  render() {
    return (
      <LoginFormContainer>
        <LoginFormTitle>Let's tell stories!</LoginFormTitle>
        <form onSubmit={this.handleSubmit}>
          <Input type='email' label='E-mail' onChange={(e) => this.setState({email: e.target.value})} required />
          <Input type='password' label='Password' onChange={(e) => this.setState({password: e.target.value})} required />
          <Input type='submit' value='Login' />
          <Button to="/create-account" text="Create account" />
        </form>
      </LoginFormContainer>
    );
  }
}

export default LoginForm;
