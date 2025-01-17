import { Box, GridItem, SimpleGrid } from '@chakra-ui/react';
import SideBar from './components/sidebar';
import AppRoutes from './AppRoutes';
import NavBar from './components/navbar';

function App() {
  return (
    <SimpleGrid
      templateAreas={{
        base: `"navbar" "main"`,
        lg: `"navbar navbar" "sidebar main"`,
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      spacingX={4}
    >
      <GridItem area={'navbar'}>
        <NavBar />
      </GridItem>
      <GridItem area={'sidebar'}>
        <SideBar />
      </GridItem>
      <GridItem area={'main'}>
        <Box paddingY={2}>
          <AppRoutes />
        </Box>
      </GridItem>
    </SimpleGrid>
  );
}

export default App;
