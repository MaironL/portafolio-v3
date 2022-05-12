import styled from 'styled-components';

export const Cont = styled.nav`
  background-color: var(--clr-black);
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  padding: 15px 0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: 0px 1px 0.5px var(--clr-bg-1);
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
