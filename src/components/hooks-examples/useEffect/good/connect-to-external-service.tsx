import { Heading, Text, Card, SimpleGrid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const getTodos = () => {
  const controller = new AbortController();

  const response = fetch('https://jsonplaceholder.typicode.com/todos', {
    signal: controller.signal,
  }).then((res) => {
    if (!res.ok) throw new Error('Failed to fetch');
    return res.json();
  });

  return { response, abort: () => controller.abort() };
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const { response, abort } = getTodos();

    response.then((todos) => setTodos(todos));

    return () => abort();
  }, []);

  if (!todos.length) {
    return 'No todos to show';
  }

  return (
    <>
      <Heading marginBottom={4}>Todos</Heading>
      <SimpleGrid spacing={4} columns={{ base: 1, md: 2, lg: 3, xl: 4 }}>
        {todos.map((todo) => (
          <GridItem key={todo.id}>
            <Card padding={4} height={'100%'}>
              <Heading fontSize={'xl'} marginBottom={2}>
                {todo.title}
              </Heading>
              {todo.completed ? (
                <Text>Completed: ✅</Text>
              ) : (
                <Text>Completed: ❌</Text>
              )}
            </Card>
          </GridItem>
        ))}
      </SimpleGrid>
    </>
  );
};
