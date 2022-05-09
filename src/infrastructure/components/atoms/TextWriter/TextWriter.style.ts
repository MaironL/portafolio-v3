import styled from 'styled-components';

export const Cont = styled.div`
  display: inline-flex;
`;

export const staticText = styled.div`
  position: relative;
  top: -1px;
  font-size: 1rem;
  color: #a9a9a9;
  line-height: 35px;

  @media screen and (min-width: 600px) {
    width: auto;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }
`;

export const dynamicTextList = styled.ul`
  margin-left: 5px;
  height: 35px;
  overflow: hidden;

  @media screen and (min-width: 600px) {
    width: auto;
    height: 1.9rem;
  }

  @media screen and (min-width: 900px) {
    height: 2rem;
  }
`;

export const dynamicTextWord = styled.li`
  line-height: 35px;
  font-size: 1rem;
  color: #a9a9a9;
  position: relative;
  top: 0;

  @media screen and (min-width: 600px) {
    width: auto;
    font-size: 1.2rem;
  }

  @media screen and (min-width: 900px) {
    font-size: 1.3rem;
  }

  animation: textSlide 12.5s steps(5) infinite;
  @keyframes textSlide {
    100% {
      top: -175px;
    }
  }
`;

export const dynamicText = styled.span`
  position: relative;
  top: -1px;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -5px;
    height: 30px;
    width: 100%;
    background-color: var(--clr-bg-2);
    border-left: 2px solid var(--clr-primary-5);
    animation: textTyping 2.5s steps(38) infinite;

    @keyframes textTyping {
      100% {
        left: 100%;
        margin: 0 -35px 0 35px;
      }
    }
  }
`;
