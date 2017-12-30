import React, { Component } from 'react';

import {
    Link,
} from 'react-router-dom';

import {
    FeaturedPostContainer,
    FeaturedPostTitle,
    FeaturedPostCover,
    FeaturedPostAuthor,
    FeaturedPostSummary,
} from './styles';

class FeaturedPost extends Component {
    render() {
        const {
            post,
        } = this.props;

        return (
            <FeaturedPostContainer>
                <Link to="/storie">
                    <FeaturedPostCover src={'/assets/' + post.cover} />
                    <FeaturedPostTitle>{post.title}</FeaturedPostTitle>
                    <FeaturedPostAuthor>{post.author}</FeaturedPostAuthor>
                    <FeaturedPostSummary>{post.summary}</FeaturedPostSummary>
                </Link>
            </FeaturedPostContainer>
        );
    }
}

export default FeaturedPost;
