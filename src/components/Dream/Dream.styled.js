import styled from 'styled-components';
import dreamBg from '../../images/dreamBg.jpg';

export const DreamBox = styled.div`
  background-image: url(${dreamBg});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 600px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
