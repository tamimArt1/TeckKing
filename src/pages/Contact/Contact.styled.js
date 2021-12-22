import styled from 'styled-components';
import bg from '../../images/dreamBg.jpg';

export const StyledContact = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
