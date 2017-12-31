import React, { Component } from 'react';

import {
  InputContainer,
} from './styles';

class Input extends Component {
  render() {
    const {
      label,
      type,
      required,
      value,
    } = this.props;

    return (
      <InputContainer>
        <label>
          <span>{label}</span>
          <input type={type} required={required} value={value} />
        </label>
      </InputContainer>
    );
  }
}

export default Input;
