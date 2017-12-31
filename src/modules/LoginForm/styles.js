import styled from 'styled-components';

import {
    ubuntuBold,
} from '../../styles/tools/types';

import {
    japeneseIndigo,
} from '../../styles/settings/colors';

export const LoginFormContainer = styled.div`
    display: block;
    max-width: 320px;
    margin: 0 auto;
    padding-top: 50px;
`;

export const LoginFormTitle = styled.h2`
    ${ubuntuBold(32)}

    text-align: center;
    color: ${japeneseIndigo};
`;