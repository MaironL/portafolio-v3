import styled, { StyledComponent } from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Cont: StyledComponent<'nav', any, {}, never> = styled.nav`
  grid-area: navbar;
  position: fixed;
  z-index: 10;
  height: 8.4%;
  max-height: 80px;
  min-height: 42px;
  width: 100%;
  background-color: var(--clr-bg-1);

  @media screen and (min-width: 1200px) {
    height: 100%;
    max-width: 12vw;
    max-height: none;
    min-height: none;
    border-right: solid 3px var(--clr-bg-2);
  }
`;

export const Navbar: StyledComponent<'div', any, {}, never> = styled.div`
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 100%;
  max-width: 1920px;

  @media screen and (min-width: 1200px) {
    margin-top: 10px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export const LogoCont: StyledComponent<'div', any, {}, never> = styled.div`
  height: 100%;

  @media screen and (min-width: 1200px) {
    height: 8.4%;
    max-height: 80px;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  height: 100%;

  & img {
    display: block;
    height: 80%;
    max-height: 50px;
    max-width: auto;
  }
`;

export const LinksCont: StyledComponent<'nav', any, {}, never> = styled.nav`
  display: none;
  position: relative;

  & .active {
    text-decoration: underline solid 2px var(--clr-primary-5);
    text-underline-position: under;
    & svg {
      color: var(--clr-primary-5);
    }
  }

  @media screen and (min-width: 600px) {
    display: flex;
    justify-content: flex-end;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 50px;
  }
`;

export const navLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: var(--clr-grey-9);
  padding-left: 35px;
  font-weight: 500;
  transition: var(--fast-transition);

  &:hover {
    color: var(--clr-primary-3);
  }

  & svg {
    margin-left: 10px;
    font-size: 1.1rem;
  }

  @media screen and (min-width: 1200px) {
    padding-left: 0;
    margin-top: 50px;
  }
`;
