import { Text, Image, Flex, Box } from '../styled';
import { StyledPart } from '../HomePart1/partOne.styled';
import img3 from '../../images/userFrendly.jpg';

const PartThree = () => {
  return (
    <StyledPart>
      <Box>
        <Image src={img3} h='600px' alt='' />
      </Box>
      <Flex
        direction='column'
        align='center'
        style={{ backgroundColor: 'purple', height: '600px' }}
      >
        <Text size='79px' weight='300'>
          03
        </Text>
        <Text size='71px' weight='300'>
          USERFRIENDLY DESIGN
        </Text>
        <Text size='21px' style={{ marginTop: '29px' }} center>
          How much time do you think that you get to make a good impression with
          a potential customer? If you’re talking about interacting with them
          online, you have less than three seconds.
        </Text>
      </Flex>
    </StyledPart>
  );
};

export default PartThree;
