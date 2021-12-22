import styled from 'styled-components';
import dreamBg from '../../images/dreamBg.jpg';

export const LoginBox = styled.div`
  background-image: url(${dreamBg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
