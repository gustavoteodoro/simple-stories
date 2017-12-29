import React, { Component } from 'react';

import Header from '../../modules/Header';
import Home from '../../pages/Home';

import {
    MainTemplate,
} from './styles';

class Main extends Component {
  render() {
    return (
      <MainTemplate>
          <Header />
          <Home />
      </MainTemplate>
    );
  }
}

export default Main;
