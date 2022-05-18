import styled from 'styled-components';
import { MainHeader, Section } from 'globalStyle';

export const Header = styled(MainHeader)`
  position: relative;

  & h3 {
    text-transform: none;
    &::after {
      content: 'Proyectos';
      z-index: -1;
      position: absolute;
      top: -90px;
      left: 0px;
      font-size: 200px;
      text-shadow: -10px -30px 40px #302e2e;
      color: #363333;
    }
  }
`;

export const ItemsCont = styled(Section)`
  background: transparent;
  z-index: 2;
`;
