import { useTheme } from 'styled-components';
import { Box, Container, Text } from '../styled';
import { StatBox, StatWrapper } from './Stat.styled';

const Stats = () => {
  const theme = useTheme();
  return (
    <Box style={{ backgroundColor: theme.colors.secondary, padding: '79px 0' }}>
      <Container>
        <Text size='67px' weight='300' color={theme.colors.text} center>
          DOING THE RIGHT THINGS
        </Text>
        <StatWrapper>
          <StatCard num='21' msg='HAPPY CLIENTS' />
          <StatCard num='12' msg='AWARDS WINNING' />
          <StatCard num='221' msg='OUR PROJECTS' />
          <StatCard num='113' msg='WORKING HOURS' />
        </StatWrapper>
      </Container>
    </Box>
  );
};

function StatCard({ num, msg }) {
  const theme = useTheme();
  return (
    <StatBox>
      <Text color='red' weight='700' size='41px' center>
        {num}
      </Text>
      <Text color={theme.colors.secondary} weight='500' size='19px' center>
        {msg}
      </Text>
    </StatBox>
  );
}

export default Stats;
