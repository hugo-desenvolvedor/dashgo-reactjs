import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine, RiSearchLine } from 'react-icons/ri'

export function Header() {
    return (
        <Flex
            as="header"
            w="100%"
            maxWidth={1480}
            h="20"
            mx="auto"
            mt="4"
            px="6"
            align="center"
        >
            <Text
                fontSize="3xl"
                fontWeight="bold"
                letterSpacing="tight"
                w="64"
            >
                dashgo
                <Text as="span" ml="1" color="pink.500">.</Text>
            </Text>

            <Flex
                as="label"
                flex="1"
                py="4"
                px="8"
                ml="6"
                maxWidth={400}
                alignSelf="center"
                color="gray.200"
                position="relative"
                bg="gray.800"
                borderRadius="full"
            >
                <Input
                    color="gray.50"
                    variant="unstyled"
                    px="4"
                    mr="4"
                    placeholder="Buscar na plataforma"
                    _placeholder={{ color: 'gray.400' }}
                />
                <Icon as={RiSearchLine} fontSize="20"/>
            </Flex>

            <Flex
                align="center"
                ml="auto"
            >
                <HStack
                    spaccing="4"
                    mx="8"
                    pr="8"
                    py="1"
                    color="gray.300"
                    borderRightWidth={1}
                    borderColor="gray.700"
                >
                    <Icon as={RiNotificationLine} fontSize="20" />
                    <Icon as={RiUserAddLine} fontSize="20" />
                </HStack>

                <Flex>
                    <Box mr="4" textAlign="right">
                        <Text>Hugo Santos</Text>
                        <Text color="gray.300" fontSize="small">hugo.desenvolvedor@gmail.com</Text>
                    </Box>

                    <Avatar size="md" name="Hugo Leonardo" src="https://media-exp1.licdn.com/dms/image/C5603AQHTd8wwZOHrjA/profile-displayphoto-shrink_200_200/0/1516359793187?e=1637193600&v=beta&t=CsZUfbW7i8opyNhi-4eH7Io2Xj9KccXnDMWLEPUUQWM" />
                </Flex>
            </Flex>
        </Flex>
    )
}