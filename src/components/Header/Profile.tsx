import { Flex, Text, Box, Avatar } from '@chakra-ui/react'

interface ProfileProps {
    showProfileData?: boolean
}

export function Profile({showProfileData = true}: ProfileProps) {
    return (
        <Flex align="center">
            {showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Hugo Santos</Text>
                    <Text color="gray.300" fontSize="small">hugo.desenvolvedor@gmail.com</Text>
                </Box>
            )}
            <Avatar size="md" name="Hugo Leonardo" src="https://media-exp1.licdn.com/dms/image/C5603AQHTd8wwZOHrjA/profile-displayphoto-shrink_200_200/0/1516359793187?e=1637193600&v=beta&t=CsZUfbW7i8opyNhi-4eH7Io2Xj9KccXnDMWLEPUUQWM" />
        </Flex>
    );
}