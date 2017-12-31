import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

import {
    HeaderMenuContainer,
    HeaderMenuContent,
} from './styles';

class HeaderMenu extends Component {
  render() {
    return (
      <HeaderMenuContainer>
        <HeaderMenuContent>
          <Link to="/login">Login</Link>
          <Link to="/create-account">Create Account</Link>
        </HeaderMenuContent>
      </HeaderMenuContainer>
    );
  }
}

export default HeaderMenu;
