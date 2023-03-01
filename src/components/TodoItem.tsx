import { TodoItemType } from '../atoms';
import ActionButton from './ActionButton';

interface Props {
  todo: TodoItemType;
}

function TodoItem({ todo: { content } }: Props) {
  return (
    <div>
      {content} <ActionButton /> <ActionButton />
    </div>
  );
}

export default TodoItem;
