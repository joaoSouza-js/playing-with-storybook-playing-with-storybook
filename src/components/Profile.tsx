import clsx from "clsx"
import { Avatar } from "./Avatar"
import {Slot} from '@radix-ui/react-slot'
import { Children, ReactNode } from "react"

export interface ProfileRootProps {
    children: ReactNode,
    className?: string
}

function ProfileRoot({children,className}: ProfileRootProps){
    return (
        <div className={
            clsx(
                "w-64 flex flex-col items-center bg-gray-800 rounded-lg overflow-hidden pb-8",
                className
            )
        }>
            {children}
        </div>
    )
}
ProfileRoot.displayName = 'Profile.Root'


interface ProfileHeaderProps {
    coverUrl: string,
    avatarUrl: string,
    asChild?: boolean
}

function ProfileHeader({avatarUrl,coverUrl,asChild}: ProfileHeaderProps){
    const Comp =  asChild ? Slot : 'header'
    return(
        <Comp className="w-full ">
            <img src={coverUrl} className='w-full h-[4rem] object-cover'/>
            <Avatar  hasBorder src={avatarUrl} className='mt-[-1.5rem] relative m-auto'/>
        </Comp>
    )
}
ProfileHeader.displayName = 'Profile.Header'

interface ProfileContentProps {
    children: ReactNode,
    asChild?: boolean,
    className?: string
}

function ProfileContent({children,asChild,className}: ProfileContentProps){
    const Comp = asChild ? Slot : 'div'
    return (
        <Comp className={clsx(
            'w-full flex flex-col items-center mt-4 ',
            className
        )}>
            {children}
        </Comp>
    )
}
ProfileContent.displayName = 'Profile.Content'

export const Profile = {
    Root: ProfileRoot,
    Header: ProfileHeader,
    Content: ProfileContent,
}