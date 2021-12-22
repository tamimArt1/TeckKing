import { Button, Text, Flex } from '../styled';
import { GetBox } from './Get.styled';

const GetApp = () => {
  return (
    <GetBox>
      <Flex direction='column'>
        <Text size='2.7rem' weight='700'>
          GET THE APP
        </Text>
        <Text size='1.3rem' style={{ margin: '2.7rem 0' }}>
          In vitae velit luctus, imperdiet augue et, elementum dui. Sed sit amet
          nisi nulla. In ut diam id lectus efficitur efficitur quis vitae felis.
          Suspendisse euismod leo sapien, sit amet accumsan quam fermentum nec.{' '}
        </Text>
        <Button>Get The App</Button>
      </Flex>
    </GetBox>
  );
};

export default GetApp;
