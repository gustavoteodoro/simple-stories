import styled from 'styled-components';

import { media } from '../../styles/tools/media';

import {
  darkSeaGreen,
} from '../../styles/settings/colors';

export const CreateAccountContainer = styled.div`
  display: block;
  min-height: calc(100vh - 80.8px);
  overflow: hidden;
  background:  ${darkSeaGreen};

  ${media.mobile`
    min-height: calc(100vh - 115px);
  `}
`;

export const CreateAccountContent = styled.div`
  max-width: 1200px;
  box-sizing: border-box;
  background: url('./assets/login-bg.png') no-repeat top 60px left 40px;
  padding-left: 600px;
  padding-bottom: 200px;
  margin: 0 auto;

  ${media.mobile`
    background: none;
    padding: 0;
  `}
`