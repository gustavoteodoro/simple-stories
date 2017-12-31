import styled from 'styled-components';

import {
    darkSeaGreen,
} from '../../styles/settings/colors';

export const LoginContainer = styled.div`
    display: block;
    min-height: calc(100vh - 80.8px);
    overflow: hidden;
    background:  ${darkSeaGreen};
`;

export const LoginContent = styled.div`
    max-width: 1200px;
    box-sizing: border-box;
    background: url('./assets/login-bg.png') no-repeat top 60px left 40px;
    padding-left: 600px;
    padding-bottom: 200px;
    margin: 0 auto;
`