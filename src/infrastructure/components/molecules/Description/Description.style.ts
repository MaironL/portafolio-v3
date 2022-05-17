import { Section } from 'globalStyle';
import styled from 'styled-components';

export const Description = styled(Section)`
  background-color: var(--clr-bg-1);
  border-radius: 5px;
  padding: 50px 20px 30px 20px;

  p {
    text-align: justify;
    color: var(--clr-grey-9);
  }

  @media screen and (min-width: 600px) {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
