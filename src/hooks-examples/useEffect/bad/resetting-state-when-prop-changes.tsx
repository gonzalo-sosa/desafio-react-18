import { Button, Heading, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export function BadProfilePage({ userId }: { userId: string }) {
  const [comment, setComment] = useState('');

  // 🔴 Evitar: volver a reiniciar el estado según el valor de la prop
  useEffect(() => {
    setComment('');
  }, [userId]);

  return (
    <>
      <Heading marginBottom={4}>Bad Profile</Heading>
      <Text>UserId: {userId}</Text>
      <Text>Comment: {comment}</Text>
    </>
  );
}

export function GoodProfilePage({ userId }: { userId: string }) {
  return <Profile userId={userId} key={userId} />;
}

function Profile({ userId }: { userId: string }) {
  // ✅ Los estados se reinician de forma automática cuando cambia la key
  const [comment, setComment] = useState('');

  return (
    <>
      <Text>
        UserId: {userId}, Comment: {comment}
      </Text>
      <Button onClick={() => setComment('')}>Reset</Button>
    </>
  );
}
