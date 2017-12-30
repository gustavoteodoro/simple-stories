import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Header from '../../modules/Header';
import Home from '../../pages/Home';
import Post from '../../pages/Post';

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
            <Route path="/storie" component={Post}/>
        </MainTemplate>
      </Router>
    );
  }
}

export default Main;
