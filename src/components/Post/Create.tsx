import clsx from "clsx"
import { Button } from "../Button"
import { Text } from "../Text"
import { TextArea } from "../TextArea"

interface PostCreateProps {
    className?: string,
}

export function PostCreate({className}:PostCreateProps){
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
            <TextArea placeholder="digite a plublicação"/>
            <Button.Root className="w-28">
                Publicar
            </Button.Root>
        </footer>
    )
}

PostCreate.displayName = 'Post.Create'