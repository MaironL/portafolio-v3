import styled from 'styled-components';

export const Cont = styled.div`
  width: 100%;

  @media screen and (min-width: 900px) {
    width: 78%;
  }
`;

export const JobTitle = styled.h3`
  color: var(--clr-primary-6);
  font-weight: 500;
  font-size: 1.15rem;
`;

export const CompanyName = styled.h4`
  text-transform: uppercase;
  color: var(--clr-grey-3);
  background: var(--clr-grey-9);
  display: inline-block;
  padding: 0.375rem 0.75rem;

  border-radius: var(--radius);
`;

export const Date = styled.p`
  margin-bottom: 35px;
  font-size: 0.9rem;
`;

export const Duty = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  & p {
    margin: 0 20px;
    width: 90%;
    font-weight: 500;
  }

  & svg {
    display: block;
    width: 15px;
    font-size: 1rem;
    color: var(--clr-primary-5);
  }
`;
