import React, { Component } from 'react';

import {
    LogoContainer,
    LogoTitle,
} from './styles';

import {
    title
} from './data.json';

class Logo extends Component {
  render() {
    return (
      <LogoContainer>
          <LogoTitle>
            {title}
          </LogoTitle>
      </LogoContainer>
    );
  }
}

export default Logo;
