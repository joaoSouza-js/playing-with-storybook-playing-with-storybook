import {Meta, StoryObj} from '@storybook/react'

import { Post, PostRootProps } from './Post'
import { Text } from './Text'

export default {
    title: 'Components/Post',
    component: Post.Root,
    args: {
        children: [
            <Post.Header 
                    avatarUrl="https://github.com/joao472762.png"
                    userName="Amanda aguiar"
                    publisedAt="publicado há 2 dias"
                    userRole="Desenvolvedor web"
                />,
                <Post.Content>
                    <Text asChild>
                        <p>
                            Fala galeraa 👋

                            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                        </p>
                    </Text>
                </Post.Content>,
                <Post.Create
                    avatarUrl='https://github.com/joao472762.png'
                    postId={3}
                    userName='amanda'

                />
        ]
    },
    argTypes: {
        children:{
            table: {
                disable: true
            }
        }
    }
} as Meta<PostRootProps>

export const Default = {}

export const WithoutHeader : StoryObj<PostRootProps> = {
    args: {
        children: [
            <Post.Content>
                    <Text asChild>
                        <p>
                            Fala galeraa 👋

                            Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                        </p>
                    </Text>
                </Post.Content>,
                <Post.Create
                    avatarUrl='https://github.com/joao472762.png'
                    postId={3}
                    userName='amanda'

                />
        ]
    }
}

export const WithComents: StoryObj<PostRootProps> = {
    args: {
        children: [
            <Post.Header 
            avatarUrl="https://github.com/joao472762.png"
            userName="Amanda aguiar"
            publisedAt="publicado há 2 dias"
            userRole="Desenvolvedor web"
        />,
        <Post.Content>
            <Text asChild>
                <p>
                    Fala galeraa 👋

                    Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀

                </p>
            </Text>
        </Post.Content>,
        <Post.Create
            avatarUrl='https://github.com/joao472762.png'
            postId={3}
            userName='amanda'

        />,
        <Post.Coment
            postId={3}
            commentId={3}
            className='mt-8'
            avatarUrl="https://github.com/joao472762.png"
            likesCounter={3}
            commentContent ={'se liga no novo post'}
            publisedAt = 'Cerca de 2h'
            userName="Amanda"
            
        />

        ]
    }
} 