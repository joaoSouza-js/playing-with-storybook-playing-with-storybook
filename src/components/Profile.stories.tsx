import {Meta, StoryObj} from '@storybook/react'
import { PencilSimpleLine } from 'phosphor-react'

import { Text } from './Text'
import { EditButton } from './EditButton'
import { Profile, ProfileRootProps } from './Profile'


export default {
    title: 'Components/Profile',
    component: Profile.Root,
    args: {
        children: [
            <Profile.Header
                    avatarUrl="https://github.com/joao472762.png"
                    coverUrl="https://source.unsplash.com/collection/928423/280x280"
            />,
            <Profile.Content>
                    <Text asChild>
                        <strong>João Souza</strong>
                    </Text>
                    <Text >
                        Desenvolvedor web
                    </Text>

                    <footer className="w-full px-8 mt-6 pt-6 border-t-[1px] border-gray-700" >
                        <EditButton.Root>
                            <EditButton.Icon>
                                <PencilSimpleLine/>
                            </EditButton.Icon>
                            Editar perfil
                        </EditButton.Root>
                    </footer>
            </Profile.Content>
        ]
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        }
    }
} as Meta<ProfileRootProps>

export const Default: StoryObj<ProfileRootProps> = {}

export const WithoutHeader: StoryObj<ProfileRootProps>  = {
    args: {
        children: [
            <Profile.Content>
                        <Text asChild>
                            <strong>João Souza</strong>
                        </Text>
                        <Text >
                           Desenvolvedor web
                        </Text>

                        <footer className="w-full px-8 mt-6 pt-6 border-t-[1px] border-gray-700" >
                           <EditButton.Root>
                                <EditButton.Icon>
                                    <PencilSimpleLine/>
                                </EditButton.Icon>
                                Editar perfil
                           </EditButton.Root>
                        </footer>
                </Profile.Content>
        ]
    }
}

export const WithoutContent: StoryObj<ProfileRootProps>  = {
    args: {
        children: [
            <Profile.Header
                avatarUrl="https://github.com/joao472762.png"
                coverUrl="https://source.unsplash.com/collection/928423/280x280"
            />
        ]
    }
}

export const WithoutEditButton: StoryObj<ProfileRootProps>  = {
    args: {
        children: [
            <Profile.Header
                    avatarUrl="https://github.com/joao472762.png"
                    coverUrl="https://source.unsplash.com/collection/928423/280x280"
            />,
            <Profile.Content>
                    <Text asChild>
                        <strong>João Souza</strong>
                    </Text>
                    <Text >
                        Desenvolvedor web
                    </Text>
            </Profile.Content>
        ]
    }
}

