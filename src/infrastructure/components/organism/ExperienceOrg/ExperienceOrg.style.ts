import styled from 'styled-components';
import { MainHeader, Section } from 'globalStyle';

export const Header = styled(MainHeader)`
  position: relative;

  & h3 {
    &::after {
      content: 'Experiencia';
      z-index: -1;
      position: absolute;
      top: -90px;
      left: 0px;
      font-size: 200px;
      text-shadow: -10px -30px 40px #302e2e;
      color: var(--clr-bg-1);
    }
  }
`;

export const JobsCont = styled(Section)`
  padding: 50px 30px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
`;
