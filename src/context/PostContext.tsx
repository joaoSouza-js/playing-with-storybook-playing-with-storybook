import { createContext, ReactNode, useEffect, useState } from "react"
import { Axios } from "../libs.axios"

interface PostContextProviderProps {
    children: ReactNode
}

export interface commentProps {
    id: number,
    avatarUrl: string,
    userName: string
    publishedAt: string
    comment: string,
    postId: number,
    likes: number,
}

interface PostProps {
    id: number,
    avatarUrl: string,
    coverUrl: string,
    userName: string,
    userRole: string,
    publishedAt: string,
    postContent: string,
    comments: commentProps[]
}


interface PostContextType  {
    posts: PostProps[],
    updateCommentLikes: (postId: number,commentId: number) => void,
    addNewComment: (newComment: commentProps, postId:number) => void,
    deleteOneComment: (postId: number,commentId: number) => void
}

export const PostContext = createContext({} as PostContextType)



export function PostContextProvider({children}:PostContextProviderProps){
    const [posts,setPosts] = useState<PostProps[]>([])

    async function getPosts(){
        const response = await Axios.get('/posts?_embed=comments')
        setPosts(response.data)
    }

    async function updateCommentLikes(postId: number,commentId: number) {
        console.log(postId)
        try {
            const post = posts.find(post => postId === post.id)
            console.log(post)
            if(post){
    
                const commentsUpdated = post.comments.map(comment => {
                    if(comment.id === commentId){
                        const commentWithMoreOneLike = {
                            ...comment,
                            likes: comment.likes + 1
    
                        }
                        Axios.put(`/comments/${commentId}`,commentWithMoreOneLike)
                        return commentWithMoreOneLike
                    }
                    return comment
                })
                
                const postWithCommentsUpdated = {
                    ...post,
                    comments: commentsUpdated
                }
    
                const postsUpdated = posts.map(state => {
                    if(state.id === post.id){
                        return postWithCommentsUpdated
                    }
                    return state
                })
    
                setPosts(postsUpdated)
                
            }
            
        } catch (error) {
            
        }
    }

     function addNewComment(newComment: commentProps, postId:number){

        const postsWithMoreOneComment = posts.map(post => {
            if(postId === post.id){
                const comments = post.comments
                const postUptdated = {
                    ...post,
                    comments: [...comments, newComment]
                }
                return postUptdated
            }

            return post
        })
        
        const newCommentWithoutCommentId = {
            postId: newComment.postId,
            avatarUrl: newComment.avatarUrl,
            userName: newComment.userName,
            publishedAt: newComment.publishedAt,
            comment: newComment.comment,
            likes: newComment.likes,
        }

        Axios.post(`/comments`,newCommentWithoutCommentId)
        setPosts(postsWithMoreOneComment)    
    }

    function deleteOneComment(postId: number,commentId: number){
        const postToRemoveOneComment = posts.find(post => post.id === postId)

        if(postToRemoveOneComment){
            const commentsWithoutOneComment = postToRemoveOneComment.comments.filter(comment => comment.id !== commentId)

            const postsUpdated = posts.map(post => {
                if(post.id === postToRemoveOneComment.id ){
                    const postWithOneCommentRemoved : PostProps = {
                        ...postToRemoveOneComment,
                        comments: commentsWithoutOneComment

                    }
                    return postWithOneCommentRemoved
                }
                return post
            })

            setPosts(postsUpdated)
            Axios.delete(`/comments/${commentId}`)
            
        }
    }


    useEffect(()=>{
        getPosts()
    }, [])

    return (
        <PostContext.Provider value={
            {posts, updateCommentLikes, addNewComment, deleteOneComment}
        }>
            {children}
        </PostContext.Provider>
    )
}