import styled from 'styled-components';
import { MainHeader } from 'globalStyle';

export const Header = styled(MainHeader)`
  position: relative;

  & h3 {
    text-transform: none;

    & div:nth-child(5) {
      margin-right: 10px;
    }

    &::after {
      content: 'Sobre_Mí';
      z-index: -1;
      position: absolute;
      top: -90px;
      left: 0px;
      font-size: 200px;
      text-shadow: -10px -30px 40px #252526;
      color: var(--clr-bg-2);
    }
  }
`;

export const InnerCont = styled.div`
  display: flex;
  flex-flow: column;
`;
