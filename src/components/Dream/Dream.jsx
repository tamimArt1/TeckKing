import { Button, Flex, Input, Text, TextArea } from '../styled';
import { DreamBox } from './Dream.styled';

const Dream = () => {
  return (
    <DreamBox>
      <Flex direction='column'>
        <Text size='5rem' color='red' weight='300'>
          DREAM,
        </Text>
        <Text size='5rem' color='red' weight='300'>
          TRAIN AND
        </Text>
        <Text size='5rem' color='red' weight='300'>
          ACTIVATE
        </Text>
        <Text size='1.3rem'>Dream Big. Because it has no limit.</Text>
      </Flex>
      <Flex direction='column'>
        <Input type='email' placeholder='Your Email' />
        <Input type='text' placeholder='Your Name' />
        <TextArea placeholder='Write Your Message Here' />
        <Button style={{ marginTop: '23px' }}>Submit Message</Button>
      </Flex>
    </DreamBox>
  );
};

export default Dream;
