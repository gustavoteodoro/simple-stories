import styled from 'styled-components';
import { media } from '../../styles/tools/media';

import {
  ubuntuBold,
} from '../../styles/tools/types';

import {
  japeneseIndigo,
  white,
} from '../../styles/settings/colors';

export const HeaderMenuContainer = styled.nav`
  display: block;
`;

export const HeaderMenuContent = styled.ul`
  display: block;
  padding: 0;
  margin-top: 30px;

  a{
    ${ubuntuBold}

    color: ${white};
    cursor: pointer;
    margin: 0 10px;
    transition: color .3s ease;

    &:hover{
      color: ${japeneseIndigo};
    }
  }

  ${media.mobile`
    margin: 0;
    padding: 0 0 15px;
  `}
`