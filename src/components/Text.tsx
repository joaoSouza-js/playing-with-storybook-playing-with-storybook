import clsx from "clsx"
import { ReactNode } from "react"
import {Slot} from "@radix-ui/react-slot"

export interface TextProps {
    children: ReactNode,
    asChild?: boolean,
    size?: 'xs' | 'sm' | 'md',
    className?: string
}

export const Text = ({asChild,children,className,size='md'}:TextProps) => {
    const Comp = asChild ? Slot : 'span'

    return(
        <Comp className={clsx(
            className,
            'text-gray-200 leading-[160%]',{
                'text-xs': size === 'xs',
                'text-sm': size === 'sm',
                'text-md': size === 'md'
            },
            
        )}>
            {children}
        </Comp>
    )
}