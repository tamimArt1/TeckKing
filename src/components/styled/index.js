import styled from 'styled-components';

export const Container = styled.div`
  width: ${({ theme }) => theme.breakpoints.xxl};
  max-width: 100%;
  margin: 0 auto;
`;

export const Text = styled.p`
  color: ${({ color, theme }) => color || theme.colors.text};
  font-weight: ${({ weight }) => weight || 400};
  font-size: ${({ size }) => size || '16px'};
  text-align: ${({ center }) => (center ? 'center' : '')};
`;

export const Box = styled.div``;

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 40px;
  background-color: ${({ bg, theme }) => bg || theme.colors.secondary};
  color: ${({ color, theme }) => color || theme.colors.text};
  font-family: inherit;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'center'};
  justify-content: ${({ justify }) => justify || 'center'};

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    text-align: center;
  }
`;

export const Image = styled.img`
  width: ${({ w }) => (w ? w : '100%')};
  height: ${({ h }) => (h ? h : '100%')};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 40px 0;
  }
`;

export const Input = styled.input`
  border: 2px solid #d1d1d4;
  border-radius: 2.7rem;
  background: none;
  padding: 23px;
  padding-left: 24px;
  font-weight: 500;
  font-size: 1rem;
  width: 67%;
  transition: 0.3s;
  color: #fff;
  font-family: inherit;
  display: block;
  margin-top: 11px;

  &:active,
  &:focus {
    outline: none;
    border: 2px solid #5555ed;
  }
`;

export const TextArea = styled.textarea`
  border: 2px solid #d1d1d4;
  border-radius: 0.7rem;
  background: none;
  padding: 23px;
  padding-left: 24px;
  font-weight: 500;
  font-size: 1rem;
  width: 67%;
  transition: 0.3s;
  color: #fff;
  font-family: inherit;
  display: block;
  margin-top: 17px;
  resize: none;

  &:active,
  &:focus {
    outline: none;
    border: 2px solid #5555ed;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 100px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h3 {
      margin: 13px 0;
    }
  }
`;
