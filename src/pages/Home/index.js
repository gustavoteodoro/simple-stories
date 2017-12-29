import React, { Component } from 'react';

import PostsCatalog from '../../modules/PostsCatalog';

import {
    HomeContainer,
    HomeContent,
} from './styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeContent>
          <PostsCatalog />
        </HomeContent>
      </HomeContainer>
    );
  }
}

export default Home;
