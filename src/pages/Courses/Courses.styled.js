import styled from 'styled-components';

export const CoursesBox = styled.div`
  min-height: calc(100vh - 80px);
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Card = styled.div`
  padding: 20px;
  width: 250px;
  height: 400px;
  border: 1px solid yellow;
  border-radius: 1rem;
`;
