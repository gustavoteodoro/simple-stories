import styled from 'styled-components';

import { media } from '../../styles/tools/media';

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

    ${media.mobile`
        ${ubuntuBold(50)}
        padding: 20px;
    `}
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

    ${media.mobile`
        ${ubuntuRegular(20)}
        line-height: 30px;
        padding: 30px;
        padding-bottom: 0px;
        margin-top: -50px;

        p {
            &:first-child{
                &:first-letter{
                    ${spectralRegular(140)}    
                    margin-left: -20px;
                }
            }
        }
    `}
`;

export const PostFooter = styled.footer`
    display: block;
    box-sizing: border-box;
    margin: 20px auto 60px;
    max-width: 900px;
    text-align: right;

    ${media.mobile`
        margin: 0 auto 20px;
        padding-right: 20px;
    `}
`;

export const PostAuthor = styled.span`
    ${ubuntuRegular(20)}
    color: ${white};
    background: ${darkSeaGreen};
    padding: 5px;
`;