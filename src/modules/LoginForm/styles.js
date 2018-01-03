import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
    ubuntuRegular,
    ubuntuBold,
} from '../../styles/tools/types';

import {
    darkBlueGray,
    japeneseIndigo,
} from '../../styles/settings/colors';

export const LoginFormContainer = styled.div`
    display: block;
    max-width: 320px;
    margin: 0 auto;
    padding-top: 50px;

    ${media.mobile`
        padding-top: 0;
    `}
`;

export const LoginFormTitle = styled.h2`
    ${ubuntuBold(32)}

    text-align: center;
    color: ${japeneseIndigo};
`;

export const LoginFormError = styled.span`
    ${ubuntuRegular(14)}
    display: block;
    color: ${darkBlueGray};
    text-align: center;
    padding: 10px 0;
`;