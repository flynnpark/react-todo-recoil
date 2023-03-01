import { Heading, Stack } from '@chakra-ui/react';

import { CategoryItemType, TodoItemType } from '../atoms';
import TodoItem from './TodoItem';

interface Props {
  category: CategoryItemType;
  todos: TodoItemType[];
}

function ItemsSection({ category: { name }, todos }: Props) {
  return (
    <Stack>
      <Heading size="md">{name}</Heading>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </Stack>
  );
}

export default ItemsSection;
