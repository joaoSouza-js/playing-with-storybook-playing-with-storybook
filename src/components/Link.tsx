import clsx from 'clsx'
import {AnchorHTMLAttributes, ReactNode} from 'react'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement>{
    children: ReactNode,
    className?: string
}

export function Link({className, children, ...props} : LinkProps){
    return(
        <a 
            {...props}
            className={clsx('text-green-500 no-underline font-bold cursor-pointer ',className)}
        >
            {children}
        </a>
    )
}