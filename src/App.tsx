import { Box, Center, useColorModeValue } from '@chakra-ui/react';

import TodoForm from './components/TodoForm';

function App() {
  return (
    <Center py={10}>
      <Box
        maxW="640px"
        w="full"
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow="2xl"
        rounded="md"
        overflow="hidden"
        p={6}
      >
        <TodoForm />
      </Box>
    </Center>
  );
}

export default App;
