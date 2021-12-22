import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CoursesBox } from './Courses.styled';
import { Text, Image, Flex } from '../../components/styled';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getCourses() {
      const { data } = await axios.get(
        'https://frozen-waters-95428.herokuapp.com/courses'
      );
      setCourses(data);
      setLoading(false);
    }
    getCourses();
  }, []);

  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <CoursesBox>
      {courses.map((course) => (
        <Flex key={course._id}>
          <CardLayout
            image={course.image}
            name={course.name}
            price={course.price}
          />
        </Flex>
      ))}
    </CoursesBox>
  );
};

function CardLayout({ image, name, price }) {
  return (
    <Card>
      <Image src={image} w='250px' h='300px' />
      <Text>{name}</Text>
      <Text>{price}</Text>
    </Card>
  );
}

export default Courses;
