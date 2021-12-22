import { Button, Container, Flex, Text } from '../styled';
import logo from '../../images/logo-nav.png';
import { Link } from 'react-router-dom';
import { Nav, NavLogo } from './Nav.styled';
import useStore from '../../hooks/useStore';
import useFirebase from '../../hooks/useFirebase';

const Navbar = () => {
  const { logOut } = useFirebase();
  const { login, dbUser } = useStore();
  return (
    <Container>
      <Nav>
        <NavLogo src={logo} alt='logo' />
        <Flex>
          <Link to='/'>
            <Text size='19px' weight='500' style={{ margin: '0 7px' }}>
              Home
            </Text>
          </Link>
          <Link to='/about'>
            <Text size='19px' weight='500' style={{ margin: '0 7px' }}>
              About
            </Text>
          </Link>
          <Link to='/courses'>
            <Text size='19px' weight='500' style={{ margin: '0 7px' }}>
              Courses
            </Text>
          </Link>
          <Link to='/contact'>
            <Text size='19px' weight='500' style={{ margin: '0 7px' }}>
              Contact
            </Text>
          </Link>
        </Flex>
        {login ? (
          <Flex>
            <Text style={{ marginRight: '7px' }}>{dbUser.displayName}</Text>
            <Button onClick={logOut}>Sign Out</Button>
          </Flex>
        ) : (
          <Link to='/login'>
            <Button>Log In</Button>
          </Link>
        )}
      </Nav>
    </Container>
  );
};

export default Navbar;
