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
                <Link to={'/storie/' + post.storieSlug}>
                    <FeaturedPostCover src={post.storieCover} />
                    <FeaturedPostTitle>{post.storieTitle}</FeaturedPostTitle>
                    <FeaturedPostAuthor>{post.storieAuthor}</FeaturedPostAuthor>
                    <FeaturedPostSummary>{post.storieText.substring(0, 140) + '...'}</FeaturedPostSummary>
                </Link>
            </FeaturedPostContainer>
        );
    }
}

export default FeaturedPost;
