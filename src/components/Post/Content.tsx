import clsx from "clsx"
import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"

interface PostContentProps {
    className?: string,
    asChild?: boolean,
    children: ReactNode
}

export function PostContent({asChild,children,className}:PostContentProps){
    const Comp = asChild ? Slot : 'section'
    return(
        <Comp className={clsx('mt-6',className)}>
            {children}
        </Comp>
    )
}

PostContent.displayName = 'Post.Content'