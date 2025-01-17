import { HStack, Image, useColorModeValue } from '@chakra-ui/react';
import ColorModeSwitch from '@/components/ui/color-mode-switch';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <HStack
      paddingY={3}
      paddingX={6}
      justifyContent={'space-between'}
      bg={useColorModeValue('gray.100', 'gray.900')}
      border={'1px'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}
    >
      <Link to="/">
        <Image src="react.svg" boxSize={'32px'} />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
