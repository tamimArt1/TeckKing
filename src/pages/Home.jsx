import Dream from '../components/Dream/Dream';
import Hero from '../components/Hero/Hero';
import PartOne from '../components/HomePart1/PartOne';
import PartTwo from '../components/HomePart2/PartTwo';

import Stats from '../components/Stats/Stats';

const Home = () => {
  return (
    <>
      <Hero />
      <PartOne />
      <PartTwo />
      <Stats />
      <Dream />
    </>
  );
};

export default Home;
