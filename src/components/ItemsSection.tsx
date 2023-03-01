import { Heading, Stack, UnorderedList } from '@chakra-ui/react';

import { TodoItemType } from '../atoms';
import Empty from './Empty';
import TodoItem from './TodoItem';

interface Props {
  category: string;
  todos: TodoItemType[];
}

function ItemsSection({ category, todos }: Props) {
  return (
    <Stack>
      <Heading size="md" mt={4}>
        {category}
      </Heading>
      {todos.length > 0 ? (
        <UnorderedList pl={6}>
          {todos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </UnorderedList>
      ) : (
        <Empty />
      )}
    </Stack>
  );
}

export default ItemsSection;
