import { useEffect, useState } from "react";
import { PencilSimpleLine } from "phosphor-react";

import { Axios } from "../libs.axios";
import { Post } from "../components/Post";
import { Text } from "../components/Text";
import { Profile } from "../components/Profile";
import { EditButton } from "../components/EditButton";

interface PostsProps {
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

export function Home(){
    const [posts, setPosts] = useState<PostsProps[]>([])

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


    return(
        <div className="w-screen max-w-5xl mx-auto mt-8">
            <div className="flex gap-8 items-start">
                
                <Profile.Root className="w-64">
                    <Profile.Header
                        avatarUrl="https://github.com/joao472762.png"
                        coverUrl="https://source.unsplash.com/collection/928423/280x280"
                    />
                    <Profile.Content>
                        <Text asChild>
                        <strong>
                            João Souza
                        </strong>
                        </Text>
                        <Text>
                        Desenvolvedor web
                        </Text>
                        <footer className="w-full px-8 mt-6 pt-6 border-t-[1px] border-gray-700">
                        <EditButton.Root>
                            <EditButton.Icon>
                            <PencilSimpleLine />
                            </EditButton.Icon>
                            Editar perfil
                        </EditButton.Root>
                        </footer>
                    </Profile.Content>
                </Profile.Root>
                
                <section className="flex flex-col gap-6 flex-1">
                    {
                        posts.map(({comments,...post}) => (

                            <Post.Root key={post.id} className="flex-1">
                                <Post.Header
                                    avatarUrl={post.avatarUrl}
                                    publisedAt={post.publishedAt}
                                    userName={post.userName}
                                    userRole={post.userRole}
                                />
                                <Post.Content>
                                    <Text asChild>
                                        <p>{post.postContent}</p>
                                    </Text> 
                                </Post.Content>
                                <Post.Create />

                                {
                                    comments.map(comment => (
                                        <Post.Coment
                                            key={comment.id
                                            }
                                            postId={post.id}
                                            updatePostLikes={updatePostLikes}
                                            avatarUrl={comment.avatarUrl}
                                            className="mt-8"
                                            likesCounter={post.likes}
                                            commentContent={comment.comment}
                                            publisedAt={comment.publishedAt}
                                            userName={comment.userName}
                                        />
                                    ))
                                }
                            </Post.Root>

                        ))
                    }

                </section>

            </div>
           
            
        </div>
    )
}