import { Box, Center, Heading } from '@chakra-ui/react';

function Empty() {
  return (
    <Box>
      <Center h={16} verticalAlign="center" borderRadius="lg" bgColor="gray.100">
        <Heading size="sm">비어 있음</Heading>
      </Center>
    </Box>
  );
}

export default Empty;
