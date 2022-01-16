import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterCont = styled.footer`
  grid-area: footer;
  background-color: var(--clr-bg-1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    margin-bottom: 5px;
  }
`;

export const Columns = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  padding: 0 5%;

  @media screen and (min-width: 600px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`;

export const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;

  p {
    font-size: 0.9rem;
    display: block;
    text-align: center;
  }
`;
export const RightColumn = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
`;

export const FLink = styled(Link)`
  font-size: 0.9rem;
  display: block;
  text-align: center;

  @media screen and (min-width: 600px) {
    margin-left: 30px;
  }

  & p:hover {
    color: var(--clr-grey-10);
  }
`;

export const Bottom = styled.div`
  background-color: var(--clr-grey-2);
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
`;

export const SocialCont = styled.div`
  display: flex;
  width: min(120px, 100%);
  justify-content: space-between;
`;

export const SocialLink = styled.a`
  display: block;
  padding: 12px;
`;

export const FBLink = styled.img`
  max-width: auto;
  height: 100%;
  transition: var(--slow-transition);

  &:hover {
    transform: scale(1.05) rotate(90deg);
  }
`;
