import React, { Component } from 'react';

import {
  PostsCatalogContainer,
} from './styles';

import {
  featuredPosts,
} from './data.json';

class PostsCatalog extends Component {
  render() {
    return (
      <PostsCatalogContainer>
        {
          featuredPosts.map((post) => (
            <img src={'/assets/' + post.cover} />
          ))
        }
      </PostsCatalogContainer>
    );
  }
}

export default PostsCatalog;
