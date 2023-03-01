import { Button, FormControl, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import { categoriesState } from '../atoms';

interface FormData {
  id: string;
  name: string;
}

function NewCategoryForm() {
  const setCategories = useSetRecoilState(categoriesState);
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit = ({ id, name }: FormData) => {
    setCategories((prevCategories) => [
      ...prevCategories,
      {
        id,
        name,
      },
    ]);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl>
        <Stack spacing={4} direction="row" w="full">
          <Input id="id" placeholder="새 카테고리 ID" {...register('id')} />
          <Input id="name" placeholder="새 카테고리명" {...register('name')} />
          <Button type="submit">추가</Button>
        </Stack>
      </FormControl>
    </form>
  );
}

export default NewCategoryForm;
