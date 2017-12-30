import React, { Component } from 'react';

import {
    PostContainer,
    PostContent,
} from './styles';

class Post extends Component {
  render() {
    return (
      <PostContainer>
        <PostContent>
          <p>Post content here</p>
        </PostContent>
      </PostContainer>
    );
  }
}

export default Post;
