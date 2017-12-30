import React, { Component } from 'react';

import PostsCatalog from '../../modules/PostsCatalog';

import {
    HomeContainer,
    HomeContent,
} from './styles';

class Home extends Component {
  constructor(props) {
      super(props);
      this.state = {
          stories: {},
      }
  }

  componentWillMount() {
    fetch('/api/stories')
    .then(results => {
      return results.json()
    }).then(data => {
      let storiesData = data;
      this.setState({stories: storiesData});
    })
  }

  render() {
    return (
      <HomeContainer>
        <HomeContent>
          {
            this.state.stories.featuredPosts &&
              <PostsCatalog stories={this.state.stories.featuredPosts} />
          }
        </HomeContent>
      </HomeContainer>
    );
  }
}

export default Home;
