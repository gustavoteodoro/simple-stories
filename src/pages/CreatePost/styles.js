import styled from 'styled-components';

import {
    ubuntuRegular,
    ubuntuBold,
    spectralRegular,
} from '../../styles/tools/types';

import {
    darkBlueGray,
    japeneseIndigo,
    darkSeaGreen,
    white,
} from '../../styles/settings/colors';

export const CreatePostContainer = styled.div`
    display: block;
    background: ${white};
`;

export const CreatePostContent = styled.article`
    max-width: 1200px;
    margin: 0 auto;
`

export const CreatePostHeader = styled.header`
    display: block;
`;

export const CreatePostTitle = styled.h1`
    ${ubuntuBold(120)}
    
    width: 100%;
    min-height: 160px;
    box-sizign: border-box;
    word-break: break-word;
    position: relative;
    color: ${japeneseIndigo};
    margin: 0;
    padding: 20px 0;

    input {
        display: block;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
    }
`;

export const CreatePostCover = styled.div`
    position: relative;
    min-height: 400px;

    div{
        display: block;
        position: absolute;
        box-sizing: border-box;
        top: 0;
        left: 0;
        width: 100%;
        min-height: 400px;
        border: 2px dashed ${darkSeaGreen};
    }

    img {
        display: block;
        position: relative;
        width: 100%;
    }
`;

export const CreatePostCoverLabel = styled.span`
    ${ubuntuRegular(24)}
    
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    pointer-events: none;
    color: ${darkBlueGray};
`;

export const CreatePostText = styled.div`
    ${ubuntuRegular(24)}

    z-index: 10;
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

export const CreatePostFooter = styled.footer`
    display: block;
    margin: 20px auto 60px;
    max-width: 900px;
    text-align: right;
`;

export const CreatePostAuthor = styled.span`
    ${ubuntuRegular(20)}
    color: ${white};
    background: ${darkSeaGreen};
    padding: 5px;
`;