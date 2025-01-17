import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

const useApi = () => [
  {
    id: 1,
    name: 'John Doe',
  },
];

export const GodParent = () => {
  const [data, setData] = useState<{ id: number; name: string }[] | null>(null);
  // ...
  return (
    <>
      <BadChild onFetched={setData} />
      <Text>{data?.[0]?.name}</Text>
    </>
  );
};

const BadChild = ({
  onFetched,
}: {
  onFetched: (data: { id: number; name: string }[]) => void;
}) => {
  const data = useApi();
  // 🔴 Evitar: pasar datos a componente padre en el efecto
  useEffect(() => {
    if (data) {
      onFetched(data);
    }
  }, [onFetched, data]);

  return null;
};

export function GoodParent() {
  const data = useApi();
  // ...
  // ✅ Good: Pasar datos como props al componente hijo
  return <GoodChild data={data} />;
}

function GoodChild({ data }: { data: { id: number; name: string }[] }) {
  return (
    <>
      <Text>{data?.[0]?.name}</Text>
    </>
  );
}
