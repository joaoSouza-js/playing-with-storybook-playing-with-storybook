import { createContext, ReactNode, useEffect, useReducer, useState } from "react"

import { Axios } from "../libs.axios"
import { commentProps, PostProps, PostReducer } from "../reducers/post/reducer"
import { 
    updatePostAction, 
    createNewCommentAction, 
    deleteOneCommentAction, 
    increaseCommentLikesAction, 
} from "../reducers/post/actions"

interface PostContextProviderProps {
    children: ReactNode
}

interface PostContextType  {
    posts: PostProps[],
    increaseCommentLikes: (postId: number,commentId: number) => void,
    createNewComment: (newComment: commentProps, postId:number) => void,
    deleteOneComment: (postId: number,commentId: number) => void
}

export const PostContext = createContext({} as PostContextType)

export function PostContextProvider({children}:PostContextProviderProps){
  const [posts, dispatch] = useReducer(PostReducer, [])

    async function getPosts(){
        const response = await Axios.get('/posts?_embed=comments')
        dispatch(updatePostAction(response.data))
    }

    async function increaseCommentLikes(postId: number,commentId: number) {  
        dispatch(increaseCommentLikesAction(commentId, postId))     
       
    }

    async function createNewComment(newComment: commentProps, postId:number){
        const newCommentWithoutCommentId = {
            postId: newComment.postId,
            avatarUrl: newComment.avatarUrl,
            userName: newComment.userName,
            publishedAt: newComment.publishedAt,
            comment: newComment.comment,
            likes: newComment.likes,
        }
     
        const response = await Axios.post(`/comments`,newCommentWithoutCommentId)
        dispatch(createNewCommentAction(postId, response.data))
    }

    function deleteOneComment(postId: number,commentId: number){   
        dispatch(deleteOneCommentAction(commentId,postId))
        Axios.delete(`/comments/${commentId}`)
    }

    useEffect(()=>{
        getPosts()
    }, [])

    return (
        <PostContext.Provider value={
            {posts, increaseCommentLikes, createNewComment, deleteOneComment}
        }>
            {children}
        </PostContext.Provider>
    )
}