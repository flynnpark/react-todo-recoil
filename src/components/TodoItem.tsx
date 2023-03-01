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

  const availableCategories = categories.filter((category) => category.id !== currentCategory.id);

  const onClick = (todoId: number, categoryId: string) => {
    return () => {
      setTodo((oldTodos) => {
        const currentIndex = oldTodos.findIndex((todo) => todo.id === todoId);
        const newCategory = categories.find((category) => category.id === categoryId);
        if (!newCategory) return [...oldTodos];
        const newTodo: TodoItemType = { ...oldTodos[currentIndex], category: newCategory };
        return [...oldTodos.slice(0, currentIndex), newTodo, ...oldTodos.slice(currentIndex + 1)];
      });
    };
  };

  return (
    <ListItem>
      <ButtonGroup size="xs" isAttached>
        {availableCategories.map((category) => (
          <ActionButton content={category.name} onClick={onClick(id, category.id)} />
        ))}
      </ButtonGroup>{' '}
      {content}
    </ListItem>
  );
}

export default TodoItem;
