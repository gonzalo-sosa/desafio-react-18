import { ReactNode } from 'react';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import theme from '@/theme';

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default Provider;
