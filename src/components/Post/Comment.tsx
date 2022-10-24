import clsx from "clsx"
import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"
import { Trash, ThumbsUp } from "phosphor-react"
import { useContext } from "react"
import { PostContext } from "../../context/PostContext"
import { ActionButton } from "../ActionButton"
import { Avatar } from "../Avatar"
import { Text } from "../Text"

interface PostComentProps {
    postId: number,
    commentId: number
    commentContent: string,
    userName: string,
    publisedAt: string,
    avatarUrl: string,
    className?: string
    likesCounter: number,
    
}

export function PostComent({postId, commentId, likesCounter,commentContent,publisedAt,userName,avatarUrl,className}:PostComentProps){
    const {updateCommentLikes,deleteOneComment} = useContext(PostContext)
    
    function handleUpdatePostLikes(){
        updateCommentLikes(postId, commentId)
    }
    function handleDeleteOneComment(){
        deleteOneComment(postId, commentId)
    }

    function timeIntervalFromNow(date: Date){
        const interval = formatDistanceToNow(date, {
            addSuffix: true,
            locale: ptBR
        })
        
        return interval
    }


    return(
        <section className={clsx('flex gap-4 w-full',className)}>
            <Avatar src={avatarUrl}/>
            <div className="flex-1 flex flex-col gap-4 ">
                <div className="bg-gray-750 p-4 pb-6 rounded-lg">
                    <header className="flex justify-between " >
                        <div className="flex flex-col">
                            <Text size="sm" asChild >
                                <strong className="text-green-500">{userName}</strong>
                            </Text>
                            <Text size="xs" asChild className="text-gray-300" >
                                <time>
                                    {timeIntervalFromNow(new Date(publisedAt))}
                                </time>

                            </Text>

                        </div>
                        
                        <ActionButton.Root title="Lixeira" onClick={handleDeleteOneComment} className="w-min h-min ">
                            <ActionButton.Icon>
                                <Trash/>
                            </ActionButton.Icon>
                        </ActionButton.Root>
                    </header>
                    <Text asChild size="sm" className="mt-4">
                        <p>{commentContent}</p>
                    </Text>
                </div>
                <div>
                    <ActionButton.Root  title="Like" onClick={handleUpdatePostLikes} className="w-max">
                        <ActionButton.Icon>
                            <ThumbsUp/>
                        </ActionButton.Icon>
                        <Text className="text-green-500 relative after:">aplaudir {likesCounter}</Text>
                    </ActionButton.Root>
                </div>
        
            </div>
        </section>
    )
}

PostComent.displayName = 'Post.Coment'