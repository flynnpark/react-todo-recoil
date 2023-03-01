import { atom } from 'recoil';

export type CategoryItemType = {
  id: string;
  name: string;
};

const defaultCategories: CategoryItemType[] = [
  {
    id: 'todo',
    name: '할 일',
  },
  {
    id: 'doing',
    name: '진행중',
  },
  {
    id: 'done',
    name: '완료',
  },
];

export type TodoItemType = {
  id: number;
  content: string;
  category: CategoryItemType;
};

export const categoriesState = atom<CategoryItemType[]>({
  key: 'categories',
  default: defaultCategories,
});

export const categoryState = atom<CategoryItemType>({
  key: 'category',
  default: defaultCategories[0],
});

export const todosState = atom<TodoItemType[]>({
  key: 'todos',
  default: [],
});