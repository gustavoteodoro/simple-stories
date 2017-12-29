import React, { Component } from 'react';

import FeaturedPost from '../../elements/FeaturedPost';

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
            <FeaturedPost post={post} />
          ))
        }
      </PostsCatalogContainer>
    );
  }
}

export default PostsCatalog;
