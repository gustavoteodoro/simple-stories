import React, { Component } from 'react';

import Logo from '../../elements/Logo';

import {
    HeaderContainer,
} from './styles';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <Logo />
      </HeaderContainer>
    );
  }
}

export default Header;
