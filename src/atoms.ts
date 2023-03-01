import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const defaultCategories: string[] = ['할 일', '진행중', '완료'];

export type TodoItemType = {
  id: number;
  content: string;
  category: string;
};

export const categoriesState = atom<string[]>({
  key: 'categories',
  default: defaultCategories,
  effects_UNSTABLE: [persistAtom],
});

export const categoryState = atom<string>({
  key: 'category',
  default: defaultCategories[0],
});

export const todosState = atom<TodoItemType[]>({
  key: 'todos',
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const todosSelector = selector({
  key: 'todosSelector',
  get: ({ get }) => {
    const todos = get(todosState);
    const categories = get(categoriesState);

    return categories.map((category) => ({
      category,
      items: todos.filter((todo) => todo.category === category),
    }));
  },
});
