import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;

  & > div {
    @media screen and (min-width: 420px) {
      max-width: calc(100% / 2);
    }

    @media screen and (min-width: 900px) {
      max-width: calc(100% / 3);
    }
  }
`;

export const ProjectInfo = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 10;
  text-align: center;
  overflow: hidden;
  background-color: var(--clr-grey-10);
  transition: var(--slow-transition);
`;

export const ProjectInfoTitle = styled.h3`
  font-family: righteous;
  margin-top: 20px;
  color: var(--clr-grey-2);
`;

export const ProjectInfoViewMoreText = styled.span`
  display: block;
  opacity: 0;
  font-family: righteous;
  font-size: 1px;
  letter-spacing: 2px;
  color: var(--clr-grey-9);
  transition: var(--slow-transition);
`;

export const ProjectInfoViewMore = styled.a`
  display: block;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  width: 1px;
  height: 1px;
  background-color: var(--clr-primary-5);
  cursor: pointer;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3), 0px 0px 30px 0px rgba(0, 0, 0, 0.7);
  transition: var(--slow-transition);

  &:hover {
    box-shadow: inset 0 0 35px 10px var(--clr-logo-orange), 0px 0px 30px 0px rgba(0, 0, 0, 0.7);
  }
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  height: auto;
  transition: var(--fast-transition);
  opacity: 90%;

  @media screen and (min-width: 600px) {
    image-rendering: crisp-edges;
    image-rendering: -moz-auto;
    image-rendering: -webkit-optimize-contrast;
  }

  @-moz-document url-prefix() {
    @media screen and (min-width: 600px) {
      image-rendering: auto;
      image-rendering: -webkit-optimize-contrast;
    }
  }
`;

export const ProjectCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover ${ProjectInfo} {
    opacity: 1;
  }

  &:hover ${ProjectInfoViewMore} {
    width: 90px;
    height: 90px;
  }

  &:hover ${ProjectInfoViewMoreText} {
    font-size: 16px;
    opacity: 100%;
  }

  /* &:hover ${ProjectImg} {
    opacity: 95%;
  } */
`;
