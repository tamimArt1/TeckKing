import { LoginBox } from '../Login/Login.styled';
import { Button, Flex, Input, Text } from '../../components/styled';
import { Link, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import { useRef } from 'react';

const Signup = () => {
  const location = useLocation();
  const { googleClient, emailPasswordSignUp } = useFirebase();
  const mailRef = useRef(null);
  const passRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);

  const handleSignIn = () => {
    const mail = mailRef.current.value;
    const pass = passRef.current.value;
    const image = imageRef.current.value;
    const name = nameRef.current.value;
    emailPasswordSignUp(mail, pass, name, image);
  };

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
        <Text size='1.3rem'>Sign Up for free to use all features.</Text>
      </Flex>
      <Flex direction='column'>
        <Input ref={mailRef} type='email' placeholder='Email' />
        <Input ref={nameRef} type='text' placeholder='User Name' />
        <Input ref={imageRef} type='text' placeholder='Profile Image Url' />
        <Input ref={passRef} type='password' placeholder='Password' />
        <Button style={{ marginTop: '23px' }} onClick={handleSignIn}>
          Signup
        </Button>
        <Link to='/login'>
          <Button style={{ marginTop: '23px' }}>
            Already have an Account? Login
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

export default Signup;
