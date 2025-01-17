import { Box, Heading } from '@chakra-ui/react';
import TodoList from '../hooks-examples/useEffect/challenges/transform-data';

const ExampleUseEffect = () => {
  return (
    <Box>
      <Heading marginBottom={4}>ExampleUseEffect</Heading>
      <TodoList />
    </Box>
  );
};

export default ExampleUseEffect;
