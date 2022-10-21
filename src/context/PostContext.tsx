import { createContext, ReactNode, useEffect, useState } from "react"
import { Axios } from "../libs.axios"

interface PostContextProviderProps {
    children: ReactNode
}

interface PostProps {
    id: number,
    avatarUrl: string,
    coverUrl: string,
    userName: string,
    userRole: string,
    publishedAt: string,
    postContent: string,
    likes: number,
    comments: [
      {
        avatarUrl: string,
        id: number,
        userName: string
        publishedAt: string
        comment: string
        postId: number
      }
    ]
}

interface PostContextType  {
    posts: PostProps[],
    updatePostLikes: (postId: number) => Promise<void>
}

export const PostContext = createContext({} as PostContextType)



export function PostContextProvider({children}:PostContextProviderProps){
    const [posts,setPosts] = useState<PostProps[]>([])

    async function getPosts(){
        const response = await Axios.get('/posts?_embed=comments')
        setPosts(response.data)
    }

    async function updatePostLikes(postId: number) {
        const post = posts.find(post => post.id === postId)
        
        if(post){

            const postWithMoreOneLike = {
                ...post,
                likes: post.likes + 1
            }
           
            
            const postsUpdated = posts.map(state => {
                if(state.id === postWithMoreOneLike.id){
                    return postWithMoreOneLike
                }
                return state
            })

            setPosts(postsUpdated)
            Axios.put(`/posts/${postId}`,postWithMoreOneLike)
        }


    }

    useEffect(()=>{
        getPosts()
    }, [])

    return (
        <PostContext.Provider value={
            {posts, updatePostLikes}
        }>
            {children}
        </PostContext.Provider>
    )
}