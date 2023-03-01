import { Button, ButtonProps } from '@chakra-ui/react';

interface Props extends Pick<ButtonProps, 'colorScheme' | 'variant' | 'onClick'> {
  content: string;
}

function ActionButton({ content, colorScheme, variant, onClick }: Props) {
  return (
    <Button colorScheme={colorScheme} variant={variant} onClick={onClick}>
      {content}
    </Button>
  );
}

export default ActionButton;
