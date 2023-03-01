import { ButtonGroup, ListItem } from '@chakra-ui/react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { categoriesState, TodoItemType, todosState } from '../atoms';
import ActionButton from './ActionButton';

interface Props {
  todo: TodoItemType;
}

function TodoItem({ todo: { id, content, category: currentCategory } }: Props) {
  const [categories] = useRecoilState(categoriesState);
  const setTodo = useSetRecoilState(todosState);

  const availableCategories = categories.filter((category) => category !== currentCategory);

  const onClick = (todoId: number, categoryId: string) => {
    return () => {
      setTodo((oldTodos) => {
        const currentIndex = oldTodos.findIndex((todo) => todo.id === todoId);
        const newCategory = categories.find((category) => category === categoryId);
        if (!newCategory) return [...oldTodos];
        const newTodo: TodoItemType = { ...oldTodos[currentIndex], category: newCategory };
        return [...oldTodos.slice(0, currentIndex), newTodo, ...oldTodos.slice(currentIndex + 1)];
      });
    };
  };

  return (
    <ListItem>
      <ButtonGroup size="xs" isAttached variant="ghost">
        {availableCategories.map((category) => (
          <ActionButton key={category} content={category} onClick={onClick(id, category)} />
        ))}
      </ButtonGroup>{' '}
      {content}
    </ListItem>
  );
}

export default TodoItem;
