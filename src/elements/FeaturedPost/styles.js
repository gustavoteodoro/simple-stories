import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
    ubuntuRegular,
    ubuntuBold,
} from '../../styles/tools/types';

import {
    black,
    japeneseIndigo,
    white,
} from '../../styles/settings/colors';

export const FeaturedPostContainer = styled.article`
    display: block;
    box-sizing: border-box;
    padding: 10px;
    margin: 10px;
    width: 31.6677%;
    box-shadow: 0px 0px 1px 0px ${black};
    background: ${white};
    color: ${black};
    border-radius: 5px;
    overflow: hidden;

    &:first-child{
        width: 45%;
    }

    &:nth-child(2) {
        width: 25%;
    }

    &:nth-child(3) {
        width: 25%;
    }

    ${media.mobile`
        width: 100%;

        &:first-child,
        &:nth-child(2),
        &:nth-child(3) {
            width: 100%;
        }
    `}
`;

export const FeaturedPostTitle = styled.h2`
    ${ubuntuBold(24)}

    display: block;
    color: ${japeneseIndigo};
    margin: 25px 0 5px;
    cursor: pointer;
`;

export const FeaturedPostCover = styled.img`
    display: block;
    width: calc(100% + 20px);
    margin: -10px;
    cursor: pointer;
`;

export const FeaturedPostAuthor = styled.span`
    ${ubuntuRegular(14)}

    display: block;
    color: ${japeneseIndigo};
    opacity: .5;
`;

export const FeaturedPostSummary = styled.p`
    ${ubuntuRegular(16)}

    display: block;
    opacity: 0.7;
    line-height: 1.5;
    margin-bottom: 5px;
`;