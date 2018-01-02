import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import {
    PostContainer,
    PostContent,
    PostHeader,
    PostTitle,
    PostCover,
    PostText,
    PostAuthor,
    PostFooter,
} from './styles';

class Post extends Component {
  constructor(props) {
      super(props);
      this.state = {
          storie: {},
      }
  }

  componentWillMount() {
    const slug = this.props.location.pathname.substring(8);
    fetch('/api/storie/' + slug)
    .then(results => {
      return results.json()
    }).then(data => {
      let storieData = data.storie;
      this.setState({storie: storieData});
    })
  }

  render() {
    const {
      storie
    } = this.state;
    return (
      <PostContainer>
        <PostContent>
          <PostHeader>
            <PostTitle>{storie.storieTitle}</PostTitle>
            <PostCover src={storie.storieCover} alt={storie.storieTitle} />
          </PostHeader>
          <PostText>
            <p>{storie.storieText}</p>
          </PostText>
          <PostFooter>
            <PostAuthor>{storie.storieAuthor}</PostAuthor>
          </PostFooter>
        </PostContent>
      </PostContainer>
    );
  }
}

export default withRouter(Post);
