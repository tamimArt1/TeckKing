import { Link } from 'react-router-dom';
import { Flex, StyledFooter, Text } from '../styled';
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <StyledFooter>
      <Flex>
        <Link to='#'>
          <Text size='19px'>Home .</Text>
        </Link>
        <Link to='#'>
          <Text size='19px'>Blog .</Text>
        </Link>
        <Link to='#'>
          <Text size='19px'> Pricing . </Text>
        </Link>
        <Link to='#'>
          <Text size='19px'> About .</Text>
        </Link>
        <Link to='#'>
          <Text size='19px'>Faq</Text>
        </Link>
      </Flex>
      <h3>&copy; Tamim Muhammad 2021.</h3>
      <Flex style={{ fontSize: '29px' }}>
        <FaFacebook />
        <FaLinkedin style={{ marginLeft: '11px' }} />
        <FaTwitter style={{ marginLeft: '11px' }} />
        <FaYoutube style={{ marginLeft: '11px' }} />
      </Flex>
    </StyledFooter>
  );
};

export default Footer;
