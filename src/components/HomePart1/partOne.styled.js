import styled from 'styled-components';

export const StyledPart = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
