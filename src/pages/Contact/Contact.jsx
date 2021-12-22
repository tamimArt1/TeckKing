import { Button, Flex, Input, Text } from '../../components/styled';
import { StyledContact } from './Contact.styled';

const Contact = () => {
  return (
    <StyledContact>
      <Flex>
        <Text
          size='3rem'
          color='yellow'
          weight='500'
          style={{ marginTop: '23px' }}
        >
          Contact Us
        </Text>
      </Flex>
      <Flex direction='column' style={{ height: '100%' }}>
        <Input type='email' placeholder='Email' />
        <Input type='text' placeholder='Name' />
        <Input type='text' placeholder='Query' />
        <Button style={{ marginTop: '29px' }}>Send</Button>
      </Flex>
    </StyledContact>
  );
};

export default Contact;
