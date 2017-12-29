import React, { Component } from 'react';

import Logo from '../../elements/Logo';

import {
    HeaderContainer,
    HeaderContent,
} from './styles';

class Header extends Component {
  render() {
    return (
      <HeaderContainer>
        <HeaderContent>
            <Logo />
        </HeaderContent>
      </HeaderContainer>
    );
  }
}

export default Header;
