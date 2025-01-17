import { List, ListItem, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const BadList = ({ items }: { items: string[] }) => {
  const [selection, setSelection] = useState<string | null>(null);

  // 🔴 Evitar: ajustar el estado según el cambio de props en el efecto
  // esto provocará un render cuando cambia la prop y otro render cuando cambia el estado
  useEffect(() => {
    setSelection(null);
  }, [items]);

  return (
    <List>
      {items.map((item) => (
        <ListItem
          key={item}
          color={selection === item ? 'green' : 'black'}
          onClick={() => setSelection(item)}
        >
          {item}
        </ListItem>
      ))}
    </List>
  );
};

export const GoodList = ({
  items,
}: {
  items: { id: number; title: string }[];
}) => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  // ✅ Best: calcular todo mientras el componente realiza el render
  const selection = items.find((item) => item.id === selectedId) ?? null;
  // ...

  return (
    <>
      <List>
        {items.map((item) => (
          <ListItem
            key={item.id}
            color={selectedId === item.id ? 'green' : 'black'}
            onClick={() => setSelectedId(item.id)}
          >
            {item.title}
          </ListItem>
        ))}
      </List>
      <Text>Selected: {selection?.title}</Text>
    </>
  );
};
