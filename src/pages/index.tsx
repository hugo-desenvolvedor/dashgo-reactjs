import  { Flex, Button, Stack } from '@chakra-ui/react';

import Input from '../components/Form/Input';


export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      align="center"
      justify="center"
    >
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input name="email" type="email" id="email" label="email"/>
          <Input name="password" type="password" id="password" label="password"/>
        </Stack>

        <Button mt="8" bg="pink.500" size="lg">Login</Button>
      </Flex>
    </Flex>
  )
}
