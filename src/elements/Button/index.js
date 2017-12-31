import React, { Component } from 'react';

import {
  Link,
} from 'react-router-dom';

import {
  ButtonContainer,
  ButtonText,
} from './styles';

class Button extends Component {
  render() {
    const {
      to,
      text,
    } = this.props;

    return (
      <ButtonContainer>
        <Link to={to}>
          <ButtonText>{text}</ButtonText>
        </Link>
      </ButtonContainer>
    );
  }
}

export default Button;
