import React, { Component } from 'react';
import Dropzone from 'react-dropzone';

import {
    CreatePostContainer,
    CreatePostContent,
    CreatePostHeader,
    CreatePostTitle,
    CreatePostCover,
    CreatePostText,
    CreatePostAuthor,
    CreatePostFooter,
    CreatePostCoverLabel,
    CreatPostSubmit,
} from './styles';

import {
  initialTitle,
  coverLabel,
  initialText,
} from './data.json';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: initialTitle,
      file: [],
      text: initialText,
    }

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleClickTitle = this.handleClickTitle.bind(this);
    this.handleBlurTitle = this.handleBlurTitle.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
    this.handleClickText = this.handleClickText.bind(this);
    this.handleBlurText = this.handleBlurText.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/create-storie', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        storieSlug: this.state.title.toLowerCase().split(' ').join('-'),
        storieTitle: this.state.title,
        storieAuthor: this.props.user.userName,
        storieText: this.state.text,
      })
    }).then(window.location.href = '/');
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

  handleChangeText(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleClickText(e) {
    if(this.state.text === initialText){
      this.setState({
        text: ''
      })
    }
  }

  handleBlurText(e) {
    if(this.state.text === ''){
      this.setState({
        text: initialText
      })
    }
  }

  onDropFiles(files) {
    files.forEach(file => {
      this.setState({
        file: file
      })
    });
  }

  render() {
    return (
      <CreatePostContainer>
        <CreatePostContent>
          <form onSubmit={this.handleSubmit}>
            <CreatePostHeader>
              <CreatePostTitle>
                <input
                  onChange={this.handleChangeTitle}
                  onClick={this.handleClickTitle} 
                  onBlur={this.handleBlurTitle}
                  required />
                {this.state.title}
              </CreatePostTitle>
              <CreatePostCover>
                <CreatePostCoverLabel>
                  {coverLabel}
                </CreatePostCoverLabel>
                <Dropzone
                  style={{display: 'block'}}
                  onDrop={this.onDropFiles.bind(this)}
                  multiple={false}
                  />
                {
                  this.state.file.preview &&
                    <img src={this.state.file.preview} alt={this.state.file.name} />
                }
              </CreatePostCover>
            </CreatePostHeader>
            <CreatePostText>
              <input
                onChange={this.handleChangeText}
                onClick={this.handleClickText} 
                onBlur={this.handleBlurText}
                required />
              <p>{this.state.text}</p>
            </CreatePostText>
            <CreatePostFooter>
              <CreatePostAuthor>{this.props.user ? this.props.user.userName : ''}</CreatePostAuthor>
            </CreatePostFooter>
            <CreatPostSubmit>
              <input type='submit' value='Publish story' />
            </CreatPostSubmit>
          </form>
        </CreatePostContent>
      </CreatePostContainer>
    );
  }
}

export default CreatePost;
