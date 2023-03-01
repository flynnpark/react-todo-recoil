import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends Pick<ButtonProps, 'colorScheme' | 'onClick'> {
  content: string;
}

function ActionButton({ content, colorScheme, onClick }: Props) {
  return (
    <Button colorScheme={colorScheme} onClick={onClick}>
      {content}
    </Button>
  );
}

export default ActionButton;
