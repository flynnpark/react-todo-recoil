import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { todosSelector } from './atoms';
import ItemsSection from './components/ItemsSection';
import TodoForm from './components/TodoForm';

function App() {
  const todos = useRecoilValue(todosSelector);

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
        {todos.map(({ category, items }) => (
          <ItemsSection key={category.id} category={category} todos={items} />
        ))}
      </Box>
    </Center>
  );
}

export default App;
