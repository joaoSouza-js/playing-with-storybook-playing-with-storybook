import clsx from "clsx"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Avatar } from "../Avatar"
import { Text } from "../Text"

interface PostHeaderProps {
    asChild?: boolean,
    className?: string,
    avatarUrl: string,
    userName: string,
    userRole?: string,
    publisedAt: string,
}

export function PostHeader({
    avatarUrl,
    className,
    publisedAt,
    userName,
    userRole
 }:PostHeaderProps){

    function timeIntervalFromNow(date: Date){
        const interval = formatDistanceToNow(date, {
            addSuffix: true,
            locale: ptBR
        })
        
        return interval
    }
    
    return(
        <header className={clsx('flex justify-between',className)}>
           <div className="flex gap-4">
                <Avatar src={avatarUrl} hasBorder/>
                <div className="flex flex-col">
                    <Text asChild>
                        <strong>{userName}</strong>
                    </Text>
                    <Text className="text-sm text-gray-300">
                        <span>{userRole}</span>
                    </Text>
                </div>

           </div>
           <Text size="sm" asChild className="text-gray-300">
                <time>{timeIntervalFromNow(new Date(publisedAt))}</time>
           </Text>
        </header>
    )
}

PostHeader.displayName = 'Post.Header'