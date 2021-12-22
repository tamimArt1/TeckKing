import { Text, Image, Flex, Box } from '../styled';
import { StyledPart } from '../HomePart1/partOne.styled';
import img4 from '../../images/four.jpg';

const PartFour = () => {
  return (
    <StyledPart style={{ marginTop: '-4px' }}>
      <Flex
        direction='column'
        align='center'
        style={{ backgroundColor: 'purple', height: '600px' }}
      >
        <Text size='79px' weight='300'>
          04
        </Text>
        <Text size='71px' weight='300'>
          WHAT WE DO
        </Text>
        <Text size='21px' style={{ marginTop: '29px' }} center>
          While you could create a separate version of your website that works
          well on mobile devices from the one people see on desktop, for most
          businesses the better option is to make one website that’s responsive.
        </Text>
      </Flex>
      <Box>
        <Image src={img4} h='600px' alt='' />
      </Box>
    </StyledPart>
  );
};

export default PartFour;
