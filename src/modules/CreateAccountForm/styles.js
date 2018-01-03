import styled from 'styled-components';

import {
    ubuntuRegular,
    ubuntuBold,
} from '../../styles/tools/types';

import {
    darkBlueGray,
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

export const CreateAccountFormError = styled.span`
    ${ubuntuRegular(14)}
    display: block;
    color: ${darkBlueGray};
    text-align: center;
    padding: 10px 0;
`;