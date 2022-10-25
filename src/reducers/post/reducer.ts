import { Axios } from "../../libs.axios"
import { ActionTypes } from "./actions"

export interface commentProps {
    id: number,
    avatarUrl: string,
    userName: string
    publishedAt: string
    comment: string,
    postId: number,
    likes: number,
}

export interface PostProps {
    id: number,
    avatarUrl: string,
    coverUrl: string,
    userName: string,
    userRole: string,
    publishedAt: string,
    postContent: string,
    comments: commentProps[]
}


export function PostReducer(state: PostProps[] , action: any){
    
    switch(action.type){
        case ActionTypes.UPDATE_POSTS : {
            const posts = action.payload.posts as PostProps[]
            return posts
        }

        case ActionTypes.INCREASE_COMMENT_LIKES: {
            const {postId, commentId} = action.payload

            const postsWithOneCommentIncreased = state.map(post => {
                if(post.id === postId){

                    const commentsWithOneCommentIncreased = post.comments.map(comment => {
                        if(comment.id === commentId){
                            const commentIncreased = {...comment, likes: comment.likes + 1}

                            Axios.put(`/comments/${commentId}`,commentIncreased)

                            return {...comment, likes: comment.likes + 1}
                        }
                        return comment
                    })

                    const postWithOneCommentIncreased = {...post, comments: commentsWithOneCommentIncreased}

                    return postWithOneCommentIncreased
                }
                return post
            })

            return postsWithOneCommentIncreased
            
        }
        case ActionTypes.CREATE_NEW_COMMENT : {
            const {newComment, postId}  = action.payload
            const postsWithMoreOneComment = state.map(post => {
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
         
            
            return postsWithMoreOneComment
            
            
        }
        case ActionTypes.DELETE_COMMENT :  {
            const {postId, commentId} = action.payload

            const postsWithoutOneComment = state.map(post => {
                if(postId === post.id){
                    const commentsWithoutOneComment =   post.comments.filter(comment => comment.id !== commentId)
                    const postWithoutOneCommnet = {
                        ...post,
                        comments: commentsWithoutOneComment

                    }
                    return postWithoutOneCommnet
                }
                return post 
            })
            return postsWithoutOneComment 
        }

        default: {return state}
    }
 }