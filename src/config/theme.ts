import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: () => ({
      body: {
        bg: 'gray.500',
      },
    }),
  },
});

export default theme;
