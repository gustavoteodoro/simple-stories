import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from '../../modules/Header';
import Home from '../../pages/Home';

import {
    MainTemplate,
} from './styles';

class Main extends Component {
  render() {
    return (
      <Router>
        <MainTemplate>
            <Header />
            <Route exact path="/" component={Home}/>
        </MainTemplate>
      </Router>
    );
  }
}

export default Main;
