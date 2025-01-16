import { Box, Heading } from '@chakra-ui/react';
import {
  FormBad,
  FormGood,
} from './hooks-examples/useEffect/bad/update-state-with-deps';
// import { TodoList } from './hooks-examples/useEffect/good/connect-to-external-service';

function App() {
  return (
    <Box padding={4}>
      <Heading as={'h1'} marginBottom={4}>
        React Hooks!
      </Heading>
      {/* <TodoList /> */}
      <FormGood />
      <FormBad />
    </Box>
  );
}

export default App;
