import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { categoryState, todosState } from '../atoms';

interface FormData {
  content: string;
}

function TodoForm() {
  const setTodos = useSetRecoilState(todosState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = ({ content }: FormData) => {
    setTodos((prevTodos) => [
      {
        id: Date.now(),
        content,
        category,
      },
      ...prevTodos,
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Stack spacing={4} direction="row" w="full">
          <Input id="content" placeholder="할 일" {...register('content')} />
          <Button type="submit">추가</Button>
        </Stack>
      </FormControl>
    </form>
  );
}

export default TodoForm;
