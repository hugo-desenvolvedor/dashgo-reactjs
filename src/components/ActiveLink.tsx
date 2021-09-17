import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";

interface ActiveLinkProps extends LinkProps {
    children: ReactElement;
    shouldMatchExactlyHref?: boolean
}

export function ActiveLink({ children, shouldMatchExactlyHref = false, ...rest }: ActiveLinkProps) {
    const { asPath } = useRouter()
    
    let isActive = false;
    
    if (shouldMatchExactlyHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true
    }

    if (!shouldMatchExactlyHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))) {
        isActive = true
    }

    return (
        <Link {...rest}>
            {cloneElement(children, {
                color: isActive ? 'pink.400' : 'gayr.500'
            })}
        </Link>
    )
}