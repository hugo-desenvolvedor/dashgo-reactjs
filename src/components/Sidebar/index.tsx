import { Stack, Box } from '@chakra-ui/react'
import { RiInputMethodLine, RiGitMergeLine, RiDashboardLine, RiContactsLine  } from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function Sidebar() {
    return (
        <Box as="aside" w="64" mr="8">
            <Stack spacing="12" align="flex-start">
                <NavSection title="MAIN">
                    <NavLink icon={RiDashboardLine}>
                        Dashboard
                    </NavLink>

                    <NavLink icon={RiContactsLine}>
                        Users
                    </NavLink>
                </NavSection>

                <NavSection title="AUTOMATION">
                    <NavLink icon={RiInputMethodLine}>
                        Forms
                    </NavLink>

                    <NavLink icon={RiGitMergeLine}>
                        Automate
                    </NavLink>
                </NavSection>
            </Stack>
        </Box>
    )
}