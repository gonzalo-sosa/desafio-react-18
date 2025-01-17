import {
  List,
  ListItem,
  Link,
  Heading,
  Box,
  useColorModeValue,
} from '@chakra-ui/react';
import { NavLink } from 'react-router';

const SideBar = () => {
  return (
    <Box
      paddingLeft={6}
      paddingY={2}
      bg={useColorModeValue('gray.100', 'gray.900')}
    >
      <List spacing={4}>
        <Heading marginBottom={4}>Hooks</Heading>
        <ListItem>
          <Link as={NavLink} to="/use-action-state">
            useActionState
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-callback">
            useCallback
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-context">
            useContext
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-debug-value">
            useDebugValue
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-deferred-value">
            useDeferredValue
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-effect">
            useEffect
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-id">
            useId
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-imperative-handle">
            useImperativeHandle
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-insertion-effect">
            useInsertionEffect
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-layout-effect">
            useLayoutEffect
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-memo">
            useMemo
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-optimistic">
            useOptimistic
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-reducer">
            useReducer
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-ref">
            useRef
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-state">
            useState
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-sync-external-store">
            useSyncExternalStore
          </Link>
        </ListItem>
        <ListItem>
          <Link as={NavLink} to="/use-transition">
            useTransition
          </Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default SideBar;
