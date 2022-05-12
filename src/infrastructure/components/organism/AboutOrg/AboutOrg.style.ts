import styled from 'styled-components';
import { MainHeader, Section } from 'globalStyle';

export const Header = styled(MainHeader)`
  position: relative;

  & h1 {
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

export const Description = styled(Section)`
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 50px;

  p {
    text-align: justify;
    color: var(--clr-grey-9);
  }

  @media screen and (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
