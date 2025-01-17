import { Box, Heading, Input, Text } from '@chakra-ui/react';
import { useEffect, useMemo, useState } from 'react';

const Form = ({
  firstName,
  lastName,
  onChangeFirstName,
  onChangeLastName,
}: {
  firstName: string;
  lastName: string;
  onChangeFirstName: (value: string) => void;
  onChangeLastName: (value: string) => void;
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Input
        value={firstName}
        onChange={(e) => onChangeFirstName(e.target.value)}
      />
      <Input
        value={lastName}
        onChange={(e) => onChangeLastName(e.target.value)}
      />
    </form>
  );
};

export const FormBad = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // 🔴 Evitar: estado redundante y efecto innecesario
  const [fullName, setFullName] = useState('');
  useEffect(() => {
    setFullName(firstName + ' ' + lastName);
  }, [firstName, lastName]);

  return (
    <Box>
      <Heading marginBottom={4}>Bad form</Heading>
      <Box>
        <Text>Full name: {fullName}</Text>
        <Form
          firstName={firstName}
          lastName={lastName}
          onChangeFirstName={setFirstName}
          onChangeLastName={setLastName}
        />
      </Box>
    </Box>
  );
};

export const FormGood = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  // ✅ Bueno: calculado durante rendering
  const fullName = firstName + ' ' + lastName;

  return (
    <Box>
      <Heading marginBottom={4}>Good form</Heading>
      <Box>
        <Text>Full name: {fullName}</Text>
        <Form
          firstName={firstName}
          lastName={lastName}
          onChangeFirstName={setFirstName}
          onChangeLastName={setLastName}
        />
      </Box>
    </Box>
  );
};

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const getFilteredTodos = (todos: Todo[], filter: (todo: Todo) => boolean) => {
  return todos.filter((todo) => filter(todo));
};

export const BadTodoList = ({
  todos,
  filter,
}: {
  todos: Todo[];
  filter: (todo: Todo) => boolean;
}) => {
  // 🔴 Evitar: estado redundante y efecto innecesario
  const [visibleTodos, setVisibleTodos] = useState<Todo[]>([] as Todo[]);
  useEffect(() => {
    setVisibleTodos(getFilteredTodos(todos, filter));
  }, [todos, filter]);

  return (
    <>
      <Heading marginBottom={4}>Bad Todos</Heading>
      {visibleTodos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </>
  );
};

export const GoodTodoList = ({
  todos,
  filter,
}: {
  todos: Todo[];
  filter: (todo: Todo) => boolean;
}) => {
  // ✅ Bueno: si getFilteredTodos no es lento en su cálculo
  const visibleTodos = getFilteredTodos(todos, filter);

  return (
    <>
      <Heading marginBottom={4}>Good Todos</Heading>
      {visibleTodos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </>
  );
};

export const BetterTodoList = ({
  todos,
  filter,
}: {
  todos: Todo[];
  filter: (todo: Todo) => boolean;
}) => {
  // ✅ Mejor: no vuelve a ejecutar la función si todos o filter no cambian
  const visibleTodos = useMemo(
    () => getFilteredTodos(todos, filter),
    [todos, filter],
  );

  return (
    <>
      <Heading marginBottom={4}>Good Todos</Heading>
      {visibleTodos.map((todo) => (
        <Text key={todo.id}>{todo.title}</Text>
      ))}
    </>
  );
};
