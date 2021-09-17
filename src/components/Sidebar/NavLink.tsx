import { Link, Text, Icon, LinkProps, Link as ChakraLink } from '@chakra-ui/react'
import { ElementType } from 'react'

interface NavLinksProps extends LinkProps {
    icon: ElementType;
    children: string;
    href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinksProps) {
    return (
        <Link href={href} passHref>
            <ChakraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20"></Icon>
                <Text ml="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </Link>
    )
}