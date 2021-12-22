import { Button, Container, Text, Image, Flex } from '../styled';
import { StyledHero } from './Hero.styled';
import hero from '../../images/Hero.png';

const Hero = () => {
  return (
    <Container style={{ marginTop: '23px' }}>
      <StyledHero>
        <Flex direction='column' align='flex-start'>
          <Text size='71px' weight='500'>
            CREATE
          </Text>
          <Text size='71px' weight='500'>
            & DELIVER
          </Text>
          <Text size='21px' style={{ marginTop: '29px' }}>
            Mind-blowing experience with the latest technology. We assure you of
            100% genuine products.
          </Text>
          <Button style={{ marginTop: '29px' }}>SEE MORE ITEMS</Button>
        </Flex>
        <Flex justify='flex-end'>
          <Image src={hero} w='60%' alt='hero' />
        </Flex>
      </StyledHero>
    </Container>
  );
};

export default Hero;
