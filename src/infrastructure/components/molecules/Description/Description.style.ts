import styled from 'styled-components';

export const Description = styled.div`
  width: 100%;
  padding: 20px 20px 10px 20px;

  p {
    text-align: justify;
    color: var(--clr-grey-9);
  }

  @media screen and (min-width: 600px) {
    padding: 20px 0px 10px 0px;
    width: max(450px, 80%);
  }

  @media screen and (min-width: 900px) {
    width: 350px;
    margin-left: 2.5%;
  }
`;
