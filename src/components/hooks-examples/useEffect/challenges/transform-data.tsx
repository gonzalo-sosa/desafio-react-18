let nextId = 0;

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function createTodo(text: string, completed = false) {
  return {
    id: nextId++,
    text,
    completed,
  } as Todo;
}

const initialTodos = [
  createTodo('Get apples', true),
  createTodo('Get oranges', true),
  createTodo('Get carrots'),
];

import { Button, Input, List, ListItem } from '@chakra-ui/react';
import { useState } from 'react';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [showActive, setShowActive] = useState<boolean>(false);
  // const [activeTodos, setActiveTodos] = useState<Todo[]>([]);
  // const [visibleTodos, setVisibleTodos] = useState<Todo[]>([]);
  // const [footer, setFooter] = useState<JSX.Element | null>(null);

  // useEffect(() => {
  //   setActiveTodos(todos.filter((todo) => !todo.completed));
  // }, [todos]);
  const activeTodos = todos.filter((todo) => !todo.completed);

  // useEffect(() => {
  //   setVisibleTodos(showActive ? activeTodos : todos);
  // }, [showActive, todos, activeTodos]);
  const visibleTodos = showActive
    ? activeTodos
    : todos.filter((todo) => !todo.completed);

  // useEffect(() => {
  //   setFooter(<footer>{activeTodos.length} todos left</footer>);
  // }, [activeTodos]);
  const footer = <footer>{activeTodos.length} todos left</footer>;

  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={showActive}
          onChange={(e) => setShowActive(e.target.checked)}
        />
        Show only active todos
      </label>
      <NewTodo onAdd={(newTodo) => setTodos([...todos, newTodo])} />
      <List>
        {visibleTodos.map((todo) => (
          <ListItem key={todo.id}>
            {todo.completed ? <s>{todo.text}</s> : todo.text}
          </ListItem>
        ))}
      </List>
      {footer}
    </>
  );
}

function NewTodo({ onAdd }: { onAdd: (todo: Todo) => void }) {
  const [text, setText] = useState('');

  function handleAddClick() {
    setText('');
    onAdd(createTodo(text));
  }

  return (
    <>
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={handleAddClick}>Add</Button>
    </>
  );
}
