import styled from 'styled-components';

export const StatWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.3rem;
  padding: 2.5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StatBox = styled.div`
  background-color: ${({ theme }) => theme.colors.text};
  padding: 2rem;
  border-radius: 13px;
  box-shadow: 0 0 7px 7px #777;

  &:hover {
    box-shadow: 0 0 3px 3px #777;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin: 11px 23px;
  }
`;
