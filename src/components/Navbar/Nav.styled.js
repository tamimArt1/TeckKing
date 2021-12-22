import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 13px 0;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const NavLogo = styled.img`
  width: 210px;
  height: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 40px;
  }
`;
