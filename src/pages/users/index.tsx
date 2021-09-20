import { Flex, Text, Icon, Box, Heading, Button, Table, Checkbox, Thead, Th, Tr, Td, Tbody, useBreakpointValue} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri';

import Link from 'next/link'

import { Header } from '../../components/Header'
import { Pagination } from '../../components/Pagination';
import { Sidebar } from '../../components/Sidebar'
import { useEffect } from 'react';


export default function UserList() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    useEffect(() => {
        fetch('http://localhost:3000/api/users')
            .then(response => response.json())
            .then(data => console.log(data));

    }, [])
    
    return (
        <Box>
            <Header />
            <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["4", "4", "6"]}>
                <Sidebar />

                <Box flex="1" borderRadius={8} bg="gray.800" p="8">
                    <Flex mb="8" justify="space-between" align="center">
                        <Heading size="lg" fontWeight="normal">Users</Heading>

                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="sm"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} fontSize="20"/>}
                            >
                                New User
                            </Button>
                        </Link>
                    </Flex>

                    <Table colorScheme="whiteAlpha">
                        <Thead>
                            <Tr>
                            <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Th>
                                <Th>User</Th>
                                { isWideVersion && <Th>Date</Th>}
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px={["4", "4", "6"]}>
                                    <Checkbox colorScheme="pink"></Checkbox>
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Hugo Santos</Text>
                                        <Text fontSize="sm" color="gray.300">hugo.desenvolvedor@gmail.com</Text>
                                    </Box>
                                </Td>
                                { isWideVersion && <Td>September 15, 2021</Td> }
                                <Td>
                                { isWideVersion && (
                                    <Button 
                                        as="a" 
                                        size="sm" 
                                        fontSize="sm" 
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                                    >
                                        Edit
                                    </Button>
                                )}
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination />
                </Box> 
            </Flex>
        </Box>
    );
}