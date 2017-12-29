import React, { Component } from 'react';

import {
    FeaturedPostContainer,
    FeaturedPostTitle,
    FeaturedPostCover,
    FeaturedPostAuthor,
    FeaturedPostSummary,
} from './styles';

class FeaturedPost extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const {
            post,
        } = this.props;

        return (
            <FeaturedPostContainer>
                <FeaturedPostCover src={'/assets/' + post.cover} />
                <FeaturedPostTitle>{post.title}</FeaturedPostTitle>
                <FeaturedPostAuthor>{post.author}</FeaturedPostAuthor>
                <FeaturedPostSummary>{post.summary}</FeaturedPostSummary>
            </FeaturedPostContainer>
        );
    }
}

export default FeaturedPost;
