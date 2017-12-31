import styled from 'styled-components';

import {
    ubuntuBold,
} from '../../styles/tools/types';

import {
    japeneseIndigo,
    white,
} from '../../styles/settings/colors';

export const CreateAccountFormContainer = styled.div`
    display: block;
    max-width: 320px;
    margin: 0 auto;
    padding-top: 0px;
`;

export const CreateAccountFormTitle = styled.h2`
    ${ubuntuBold(32)}

    text-align: center;
    color: ${japeneseIndigo};
`;

export const LinkLogin = styled.span`
    color: ${white};

    a {
        color: ${japeneseIndigo};
        cursor: pointer;
    }
`;