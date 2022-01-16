import styled from 'styled-components';

export const SocialCont = styled.aside`
  position: absolute;
  right: 4%;
  top: 12%;
  width: 3rem;
  padding: 10px 1px 0 1px;
  border-radius: 35px;
`;

export const SocialLink = styled.a`
  display: block;
  padding-top: 2px;
`;

export const Link = styled.img`
  width: 100%;
  height: auto;
  padding: 0.4rem 0.4rem;
  transition: var(--slow-transition);

  &:hover {
    transform: scale(1.05) rotate(90deg);
  }
`;
