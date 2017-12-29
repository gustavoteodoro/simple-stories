import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

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
        <Link to="/">
          <LogoTitle>
            {title}
          </LogoTitle>
        </Link>
      </LogoContainer>
    );
  }
}

export default Logo;
