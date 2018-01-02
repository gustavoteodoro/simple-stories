import React, { Component } from 'react';

import Logo from '../../elements/Logo';
import HeaderMenu from '../HeaderMenu';

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
          <HeaderMenu user={this.props.user} />
        </HeaderContent>
      </HeaderContainer>
    );
  }
}

export default Header;
