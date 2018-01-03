import styled from 'styled-components';

import {
  spectralRegular,
} from '../../styles/tools/types';

import {
  white,
} from '../../styles/settings/colors';

export const LogoContainer = styled.div`
  display: block;
`;

export const LogoTitle = styled.h1`
  ${spectralRegular(40)};

  display: inline-block;
  margin: 0;
  padding: 10px;
  color: ${white};
  cursor: pointer;
`;