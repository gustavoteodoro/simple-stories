import styled from 'styled-components';

import {
    ubuntuRegular,
    ubuntuBold,
    spectralRegular,
} from '../../styles/tools/types';

import {
    japeneseIndigo,
    darkSeaGreen,
    white,
} from '../../styles/settings/colors';

export const PostContainer = styled.div`
    display: block;
    background: ${white};
`;

export const PostContent = styled.article`
    max-width: 1200px;
    margin: 0 auto;
`

export const PostHeader = styled.header`
    display: block;
`;

export const PostTitle = styled.h1`
    ${ubuntuBold(120)}

    word-break: break-word;
    color: ${japeneseIndigo};
    margin: 0;
    padding: 20px 0;
`;

export const PostCover = styled.img`
    display: block;
    width: 100%;
`;

export const PostText = styled.div`
    ${ubuntuRegular(24)}

    line-height: 50px;
    margin: 60px auto 0;
    max-width: 900px;
    text-align: justify;

    p {
        &:first-child{
            &:first-letter{
                ${spectralRegular(360)}
                color: ${darkSeaGreen};    
                margin-left: -150px;
            }
        }
    }
`;

export const PostFooter = styled.footer`
    display: block;
    margin: 20px auto 60px;
    max-width: 900px;
    text-align: right;
`;

export const PostAuthor = styled.span`
    ${ubuntuRegular(20)}
    color: ${white};
    background: ${darkSeaGreen};
    padding: 5px;
`;