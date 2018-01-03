import styled from 'styled-components';

import {
  ubuntuRegular,
} from '../../styles/tools/types';

import {
  japeneseIndigo,
  white,
} from '../../styles/settings/colors';

export const InputContainer = styled.div`
  display: block;

  label {
    display: block;
  }

  span {
    ${ubuntuRegular(16)}

    display: block;
    color: ${white};
  }

  input {
    ${ubuntuRegular(20)}
    
    display: block;
    box-sizing: border-box;
    width: 100%;
    outline: 0;
    margin: 5px 0 10px;
    padding: 10px;
    border: 0;
    color: ${japeneseIndigo};
    background: ${white};
    
    &[type="submit"] {
      cursor: pointer;
      transition: background .4s ease;

      &:hover{
        background: ${japeneseIndigo};
        color: ${white};
      }
    }
  }
`;