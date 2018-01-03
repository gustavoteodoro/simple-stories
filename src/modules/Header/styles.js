import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
    darkSeaGreen,
} from '../../styles/settings/colors';

export const HeaderContainer = styled.div`
    display: block;
    background: ${darkSeaGreen};
`;

export const HeaderContent = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;

    ${media.mobile`
        display: block;
        text-align: center;
    `}
`;