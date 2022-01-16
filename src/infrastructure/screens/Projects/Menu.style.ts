import styled from 'styled-components';

export const Cont = styled.nav`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 5%;

  @media screen and (min-width: 600px) {
    margin-bottom: 4%;
  }
`;

export const CategoryButtom = styled.button`
  font-size: 0.9rem;
  font-family: inherit;
  font-weight: 600;
  border-color: transparent;
  background-color: transparent;
  color: var(--clr-grey-9);
  transition: var(--fast-transition);
  cursor: pointer;

  &:hover {
    color: var(--clr-primary-5);
  }
`;
