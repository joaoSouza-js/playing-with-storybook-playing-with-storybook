import { PostProps } from "./reducer";

export enum ActionTypes {
    UPDATE_POSTS=  'UPDATE_POSTS',
    INCREASE_COMMENT_LIKES = 'INCREASE_COMMENT_LIKES',
    CREATE_NEW_COMMENT = 'CREATE_NEW_COMMENT',
    DELETE_COMMENT = 'DELETE_COMMENT'
}


export function updatePostAction(posts: PostProps[]){
    return {
        type: ActionTypes.UPDATE_POSTS,
        payload:{
            posts
        }
    }
}

export function increaseCommentLikesAction(commentId: number, postId: number){
    return {
        type: ActionTypes.INCREASE_COMMENT_LIKES,
        payload: {
            commentId,
            postId
        }
    }
}

export function createNewCommentAction(postId: number, newComment: PostProps){
    return {
        type: ActionTypes.CREATE_NEW_COMMENT,
        payload: {
            postId,
            newComment
        }
    }
}

export function deleteOneCommentAction(commentId: number, postId: number){
    return {
        type: ActionTypes.DELETE_COMMENT,
        payload: {
            commentId,
            postId
        }
    }
}