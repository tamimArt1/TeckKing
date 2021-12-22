import { Button, Container, Text, Image, Flex } from '../styled';
import { StyledPart } from '../HomePart1/partOne.styled';
import img2 from '../../images/img2.png';
import { useTheme } from 'styled-components';

const PartTwo = () => {
  const theme = useTheme();
  return (
    <Container style={{ marginTop: '23px' }}>
      <StyledPart>
        <Flex direction='column' align='flex-start'>
          <Text size='71px' weight='300' color={theme.colors.secondary}>
            02
          </Text>
          <Text size='71px' weight='500'>
            QUICKLY PICK UP
          </Text>
          <Text size='71px' weight='500'>
            A NEW SKILL
          </Text>
          <Text size='21px' style={{ marginTop: '29px' }}>
            How much time do you think that you get to make a good impression
            with a potential customer? If you’re talking about interacting with
            them online, you have less than three seconds.
          </Text>
          <Button style={{ marginTop: '29px' }}>CONTACT US</Button>
        </Flex>
        <Flex justify='flex-end'>
          <Image src={img2} w='80%' alt='' />
        </Flex>
      </StyledPart>
    </Container>
  );
};

export default PartTwo;
