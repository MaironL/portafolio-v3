import styled from 'styled-components';

export const List = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: row wrap;
`;

export const ItemInfo = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  top: 0;
  text-align: center;
  color: var(--clr-grey-2);
  transition: var(--slow-transition);

  & header {
    margin: 15% 0 5% 0;
  }

  & p {
    font-size: 0.85rem;
    color: var(--clr-grey-1);
  }
`;

export const Item = styled.img`
  max-width: 100%;
  height: auto;
  transition: var(--slow-transition);
`;

export const ItemCont = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 30px;
  max-width: 410px;
  background-color: var(--clr-grey-10);

  @media screen and (min-width: 600px) {
    margin: 0 20px 30px 20px;
  }

  &:hover ${ItemInfo} {
    opacity: 1;
  }

  &:hover ${Item} {
    opacity: 0.035;
  }
`;
