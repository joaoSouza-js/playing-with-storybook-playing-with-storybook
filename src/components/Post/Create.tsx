import clsx from "clsx"
import { ChangeEvent, FormEvent, FormEventHandler, FormHTMLAttributes, useContext, useId, useState } from "react"
import { commentProps,PostContext } from "../../context/PostContext"
import { Button } from "../Button"
import { Text } from "../Text"
import { TextArea } from "../TextArea"

interface PostCreateProps {
    className?: string,
    avatarUrl: string,
    userName: string,
    postId: number,
}

export function PostCreate({className,avatarUrl,postId,userName}:PostCreateProps){
    const {addNewComment} = useContext(PostContext)
    const [textComment, setTextComment] = useState('')
    const [isDisable,setIsDisable] = useState(false)

    const user = {
        avatarUrl: 'https://github.com/joao472762.png',
        userName: 'Amanda Aguiar',
    }
    

    function handleAddNewComment(event: FormEvent){
        event.preventDefault()
        setIsDisable(true)
        
        
        const newComment: commentProps = {
            id: new Date().getTime(),
            avatarUrl: avatarUrl,
            comment: textComment,
            publishedAt: String(new Date),
            userName: userName,
            postId: postId,
            likes: 0
        }

        addNewComment(newComment,postId)
        
        setIsDisable(false)
    }

    function handleChangeCommentText(event: ChangeEvent<HTMLTextAreaElement>){
        setTextComment(event.target.value)
     
    }

    const isDisabledButton = !textComment || isDisable

    return(
        <footer className={
            clsx(
                'flex flex-col gap-4 mt-6 pt-6 border-gray-700 border-solid border-t'
            ,className
            )}
        >
            <Text asChild>
                <strong>Deixe seu feedback</strong>
            </Text>
            <form onSubmit={handleAddNewComment}>
                <TextArea
                        placeholder="digite a plublicação" 
                    onChange={handleChangeCommentText}
                />
                <Button.Root
                    disabled={isDisabledButton}
                    className="w-28"
                >
                    Commentar
                </Button.Root>
                
                
            </form>
        </footer>
    )
}

PostCreate.displayName = 'Post.Create'