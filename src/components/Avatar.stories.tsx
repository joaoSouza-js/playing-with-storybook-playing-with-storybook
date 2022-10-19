import {Meta, StoryObj} from '@storybook/react'
import { Avatar, AvatarProps } from './Avatar'

export default {
    title: 'Components/Avatar',
    component: Avatar,
    args: {
        src: 'https://github.com/joao472762.png'
    }
} as Meta<AvatarProps>


export const Default : StoryObj<AvatarProps> = {}

export const WithBorder : StoryObj<AvatarProps> = {
    args: {
        hasBorder: true
    }
} 