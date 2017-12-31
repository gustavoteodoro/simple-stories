import React, { Component } from 'react';

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
  render() {
    return (
      <PostContainer>
        <PostContent>
          <PostHeader>
            <PostTitle>Anxious fans crawl out of a portal in a tree on a ham radio</PostTitle>
            <PostCover src="/assets/will.gif" />
          </PostHeader>
          <PostText>
            <p>Apples decipher Christmas lights on a walkie talkie. Comic books cast a Spell of Protection on trail mix. Twelve-sided die question the sanity of Karen Wheeler, ingorning that Steve sneaks food downstairs. However, twelve-sided die make lights flicker around a flashlight.</p>
            <p>Sometimes Tommy uses an axe on the wall over a walkie talkie around The Clash. Unbeknownst to some, Jonathan sneaks food downstairs under Pez under a bike. However, Steve makes lights flicker on supermarket patrons in an Eggo. Dr. Brenner questions the sanity of Barb even though Ted Wheeler hides near a bike.</p>
            <p>The Clash decipher Christmas lights under a Millennium Falcon model. Occasionally Hopper casts a Spell of Protection over anxious fans with Jonathan's camera. Carol questions the sanity of Jonathan even though Joyce uses an axe on the wall near a Millennium Falcon model. In a world where Deputy Powell casts a fireball spell on scientists around chocolate pudding.</p>
          </PostText>
          <PostFooter>
            <PostAuthor>Gustavo Teodoro</PostAuthor>
          </PostFooter>
        </PostContent>
      </PostContainer>
    );
  }
}

export default Post;
