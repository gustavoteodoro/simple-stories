import React, { Component } from 'react';

import FeaturedPost from '../../elements/FeaturedPost';

import {
  PostsCatalogContainer,
} from './styles';

class PostsCatalog extends Component {
  render() {
    return (
      <PostsCatalogContainer>
        {
          this.props.stories.map((post) => (
            <FeaturedPost post={post} key={post.title} />
          ))
        }
      </PostsCatalogContainer>
    );
  }
}

export default PostsCatalog;
