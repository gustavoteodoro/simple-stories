import styled from 'styled-components';

import {
    ubuntuRegular,
} from '../../styles/tools/types';

import {
    japeneseIndigo,
    white,
} from '../../styles/settings/colors';

export const ButtonText = styled.span`
    ${ubuntuRegular(20)}

    display: inline-block;
    color: ${white};
    padding: 10px;
`;

export const ButtonContainer = styled.div`
    display: block;
    background: ${japeneseIndigo};
    text-align: center;
    cursor: pointer;
    transition: background .4s ease;

    &:hover {
        background: ${white};

        ${ButtonText} {
            color: ${japeneseIndigo};
        }
    }
`;