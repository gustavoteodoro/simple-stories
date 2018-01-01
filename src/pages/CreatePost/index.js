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
} from './styles';

import {
  initialTitle,
  coverLabel,
} from './data.json';

class CreatePost extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: initialTitle,
      files: [],
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

  onDropFiles(files) {
    this.setState({
      files
    });
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
                this.state.files[0] &&
                  this.state.files.map(file => (
                    <img src={file.preview} />
                  ))
              }
            </CreatePostCover>
          </CreatePostHeader>
          <CreatePostText>
            <p>Write your text here...</p>
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
