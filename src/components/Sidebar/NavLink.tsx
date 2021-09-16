import { Link, Text, Icon, LinkProps } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinksProps extends LinkProps {
    icon: ElementType;
    children: string
}

export function NavLink({ icon, children, ...rest }: NavLinksProps) {
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20"></Icon>
            <Text ml="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}