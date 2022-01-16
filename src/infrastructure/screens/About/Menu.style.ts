import styled from 'styled-components';

export const Cont = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  width: fit-content;
  margin: 0 20px 10% 0;

  @media screen and (max-width: 899px) {
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 20px 10% 20px;
    width: 100%;
  }
`;

export const CategoryButtom = styled.button`
  margin-bottom: 5px;
  font-size: 1rem;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: 500;
  border-color: transparent;
  background-color: transparent;
  color: var(--clr-grey-9);
  transition: var(--fast-transition);
  display: block;
  cursor: pointer;

  &:hover {
    color: var(--clr-primary-5);
  }

  @media screen and (max-width: 899px) {
    margin: 0 5px;
  }
`;
