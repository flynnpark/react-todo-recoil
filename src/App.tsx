import { Box, Center, StackDivider, useColorModeValue, VStack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';

import { todosSelector } from './atoms';
import ItemsSection from './components/ItemsSection';
import NewCategoryForm from './components/NewCategoryForm';
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
        <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
          <TodoForm />
          {todos.map(({ category, items }) => (
            <ItemsSection key={category} category={category} todos={items} />
          ))}
          <NewCategoryForm />
        </VStack>
      </Box>
    </Center>
  );
}

export default App;
