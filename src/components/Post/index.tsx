import { Slot } from "@radix-ui/react-slot"
import clsx from "clsx"

import { ReactNode } from "react"
import { PostCreate } from "./Create"
import { PostHeader } from "./Header"
import { PostComent } from "./Comment"
import { PostContent } from "./Content"

export interface PostRootProps {
    asChild?: boolean,
    children: ReactNode,
    className?: string
}
export function PostRoot({asChild,children,className}: PostRootProps){
    const Comp = asChild ? Slot : 'main'
    return(
        <Comp className={clsx('bg-gray-800 rounded-lg p-10',className)}>
            {children}
        </Comp>
    )
}



export const Post = {
    Root: PostRoot,
    Header: PostHeader,
    Content: PostContent,
    Create: PostCreate,
    Coment: PostComent
}
