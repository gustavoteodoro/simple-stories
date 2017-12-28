import React, { Component } from 'react';

import Header from '../../modules/Header';

import {
    MainTemplate,
} from './styles';

class Main extends Component {
  render() {
    return (
      <MainTemplate>
          <Header />
      </MainTemplate>
    );
  }
}

export default Main;
