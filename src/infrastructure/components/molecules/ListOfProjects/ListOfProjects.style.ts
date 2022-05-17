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

  filter: blur(10px);
  transition: var(--slow-transition);
`;

export const ProjectInfoTitle = styled.h3`
  font-family: righteous;
  margin-top: 30px;
  font-size: 1.1rem;
  color: var(--clr-grey-2);
`;

export const ProjectInfoViewMoreText = styled.span`
  display: block;
  font-family: righteous;
  font-size: 16px;
  letter-spacing: 2px;
  color: var(--clr-grey-9);
  transition: var(--slow-transition);
`;

export const ProjectInfoViewMore = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  padding: 15px 20px;
  cursor: pointer;
  background-color: var(--clr-primary-5);
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.7);
`;

export const ProjectImg = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 100%;
  filter: blur(0px);
  transition: var(--slow-transition);

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

export const ProjectInProcessImg = styled.img`
  max-width: 100%;
  height: auto;
  opacity: 100%;
  transition: var(--fast-transition);

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
  background-color: var(--clr-grey-10);
  transition: var(--fast-transition);

  &:hover ${ProjectInfo} {
    opacity: 1;
    filter: blur(0px);
  }

  &:hover ${ProjectImg} {
    opacity: 0;
    filter: blur(10px);
  }
`;
