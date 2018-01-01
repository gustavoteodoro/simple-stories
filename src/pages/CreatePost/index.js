import React, { Component } from 'react';

import {
    CreatePostContainer,
    CreatePostContent,
    CreatePostHeader,
    CreatePostTitle,
    CreatePostCover,
    CreatePostText,
    CreatePostAuthor,
    CreatePostFooter,
} from './styles';

import {
  initialTitle,
} from './data.json';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: initialTitle
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleClickTitle = this.handleClickTitle.bind(this);
    this.handleBlurTitle = this.handleBlurTitle.bind(this);
  }

  handleChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  handleClickTitle(e) {
    if(this.state.title === initialTitle){
      this.setState({
        title: ''
      })
    }
  }

  handleBlurTitle(e) {
    if(this.state.title === ''){
      this.setState({
        title: initialTitle
      })
    }
  }

  render() {
    return (
      <CreatePostContainer>
        <CreatePostContent>
          <CreatePostHeader>
            <CreatePostTitle>
              <input
                onChange={this.handleChangeTitle}
                onClick={this.handleClickTitle} 
                onBlur={this.handleBlurTitle} />
              {this.state.title}
            </CreatePostTitle>
            <CreatePostCover src="/assets/will.gif" />
          </CreatePostHeader>
          <CreatePostText>
            <p>Apples decipher Christmas lights on a walkie talkie. Comic books cast a Spell of Protection on trail mix. Twelve-sided die question the sanity of Karen Wheeler, ingorning that Steve sneaks food downstairs. However, twelve-sided die make lights flicker around a flashlight.</p>
            <p>Sometimes Tommy uses an axe on the wall over a walkie talkie around The Clash. Unbeknownst to some, Jonathan sneaks food downstairs under Pez under a bike. However, Steve makes lights flicker on supermarket patrons in an Eggo. Dr. Brenner questions the sanity of Barb even though Ted Wheeler hides near a bike.</p>
            <p>The Clash decipher Christmas lights under a Millennium Falcon model. Occasionally Hopper casts a Spell of Protection over anxious fans with Jonathan's camera. Carol questions the sanity of Jonathan even though Joyce uses an axe on the wall near a Millennium Falcon model. In a world where Deputy Powell casts a fireball spell on scientists around chocolate pudding.</p>
          </CreatePostText>
          <CreatePostFooter>
            <CreatePostAuthor>Gustavo Teodoro</CreatePostAuthor>
          </CreatePostFooter>
        </CreatePostContent>
      </CreatePostContainer>
    );
  }
}

export default CreatePost;
