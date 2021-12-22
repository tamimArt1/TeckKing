import { Button, Container, Text, Image, Flex } from '../styled';
import { StyledPart } from './partOne.styled';
import img1 from '../../images/partOne.jpg';
import { useTheme } from 'styled-components';

const PartOne = () => {
  const theme = useTheme();
  return (
    <Container style={{ marginTop: '23px' }}>
      <StyledPart>
        <Flex justify='flex-start'>
          <Image src={img1} w='80%' alt='' />
        </Flex>
        <Flex direction='column' align='flex-start'>
          <Text size='71px' weight='300' color={theme.colors.secondary}>
            01
          </Text>
          <Text size='71px' weight='500'>
            An Inspirational
          </Text>
          <Text size='71px' weight='500'>
            Technology
          </Text>
          <Text size='21px' style={{ marginTop: '29px' }}>
            Mind-blowing experience with the latest technology. We assure you of
            100% genuine products.
          </Text>
          <Button style={{ marginTop: '29px' }}>SUBSCRIBE US</Button>
        </Flex>
      </StyledPart>
    </Container>
  );
};

export default PartOne;
