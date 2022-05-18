import styled from 'styled-components';

export const SocialCont = styled.aside`
  position: absolute;
  display: none;
  flex-direction: column;
  align-items: center;
  right: 2.5%;
  bottom: 0%;
  width: 50px;
  padding: 10px 1px 0 1px;
  border-radius: 35px;

  @media screen and (min-width: 600px) {
    display: flex;
  }

  @media screen and (min-width: 1200px) {
    right: 5%;
  }
`;

export const VerticalLine = styled.div`
  background-color: var(--clr-logo-orange);
  box-shadow: 0 0 5px 1px var(--clr-logo-orange);
  width: 2px;

  @media screen and (min-height: 280px) {
    height: 10px;
  }

  @media screen and (min-height: 320px) {
    height: 100px;
  }

  @media screen and (min-height: 420px) {
    height: 200px;
  }
`;

export const SocialLink = styled.a`
  display: block;
  margin-bottom: 25px;
`;

export const Link = styled.img`
  width: 25px;
  height: auto;
  image-rendering: crisp-edges;
  image-rendering: crisp-edges;
  image-rendering: -webkit-optimize-contrast;
  transition: var(--fast-transition);

  &:hover {
    transform: scale(1.1);
    filter: invert(49%) sepia(67%) saturate(429%) hue-rotate(352deg) brightness(95%) contrast(85%)
      drop-shadow(5px 5px 5px rgb(0 0 0 / 0.4));
  }
`;
