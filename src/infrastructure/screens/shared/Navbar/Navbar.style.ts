import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Cont = styled.nav`
  grid-area: navbar;
  display: flex;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
  height: 90px;
  width: 100%;
  background-color: var(--clr-black);
  box-shadow: 0px 1px 0.5px var(--clr-bg-1);

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    justify-content: start;
    position: static;
    height: 100%;
    box-shadow: 1px 0px 0.5px var(--clr-bg-1);
  }
`;

export const LogoCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 30px;

  @media screen and (min-width: 800px) {
    background-color: var(--clr-logo-bg);
  }

  @media screen and (min-width: 1200px) {
    padding: 35px 15px 35px 20px;
    flex-direction: column;
  }
`;

export const LogoLink = styled(Link)``;

export const Logo = styled.img`
  max-height: 100%;
  width: 100px;
  display: block;
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  transition: var(--fast-transition);

  &:hover {
    filter: hue-rotate(180deg) drop-shadow(0px 0px 3px var(--clr-logo-orange));
  }

  @media screen and (min-width: 1200px) {
    width: auto;
    max-width: 100%;
    max-height: auto;
    height: auto;
  }
`;

export const LogoTextCont = styled.div`
  display: none;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 20px;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 20px;
    margin-left: 0px;
  }
`;

export const LogoName = styled.span`
  display: block;
  font-family: 'Righteous', cursive;
  color: var(--clr-grey-9);
  text-align: center;
  font-size: 20px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    color: var(--clr-grey-9);
    font-weight: 600;
    text-align: center;
    font-size: 24px;
    margin-top: 20px;
    width: 100%;
  }
`;

export const LogoRole = styled.span`
  display: block;
  color: var(--clr-grey-9);
  text-align: center;
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  margin-top: 10px;
  width: 100%;

  @media screen and (min-width: 1200px) {
    color: var(--clr-grey-9);
    text-align: center;
    font-style: italic;
    margin-top: 10px;
    width: 100%;
  }
`;

export const LinksCont = styled.nav`
  display: none;
  position: relative;

  & .active {
    box-shadow: 0px -2px 5px var(--clr-logo-orange);
    color: var(--clr-logo-orange);
  }

  @media screen and (min-width: 600px) {
    display: flex;
    margin-right: 20px;
  }

  @media screen and (min-width: 1200px) {
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-right: 0px;
    box-shadow: 0px 0.5px 0.5px var(--clr-util-grey), 0px -0.5px 0.5px var(--clr-util-grey);
    & .active {
      box-shadow: -3px 0px 5px var(--clr-logo-orange);
    }
  }
`;

export const LinkNav = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--clr-grey-9);
  padding: 0 15px;
  font-size: 14px;
  transition: var(--fast-transition);

  &:hover {
    color: var(--clr-logo-orange);
  }

  @media screen and (min-width: 1200px) {
    width: 100%;
    padding: 16px 0;
    box-shadow: 0px 0.5px 0.5px var(--clr-util-grey), 0px -0.5px 0.5px var(--clr-util-grey);
  }
`;
