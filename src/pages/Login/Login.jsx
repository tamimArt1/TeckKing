import { LoginBox } from './Login.styled';
import { Button, Flex, Input, Text } from '../../components/styled';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { useRef } from 'react';

const Login = () => {
  const location = useLocation();
  const { googleClient, emailPasswordLogin } = useFirebase();
  const mailRef = useRef(null);
  const passRef = useRef(null);
  return (
    <LoginBox>
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
        <Text size='1.3rem'>Log In to use all features.</Text>
      </Flex>
      <Flex direction='column'>
        <Input ref={mailRef} type='email' placeholder='Your Email' />
        <Input ref={passRef} type='password' placeholder='Password' />
        <Button
          style={{ marginTop: '23px' }}
          onClick={() =>
            emailPasswordLogin(
              mailRef.current.value,
              passRef.current.value,
              location
            )
          }
        >
          Login
        </Button>
        <Link to='/signup'>
          <Button style={{ marginTop: '23px' }}>
            Dont have an Account? Signup
          </Button>
        </Link>
        <Button
          style={{ marginTop: '23px' }}
          onClick={() => googleClient(location)}
        >
          Or Sign In using Google
        </Button>
      </Flex>
    </LoginBox>
  );
};

export default Login;
