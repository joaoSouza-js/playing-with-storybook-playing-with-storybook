import {Meta, StoryObj} from '@storybook/react'
import {PencilSimpleLine} from 'phosphor-react'
import { EditButton, EditButtonRootProps } from './EditButton'


export default {
    title: 'Components/EditButton',
    component: EditButton.Root,
    args: {
        children: [
            <EditButton.Icon><PencilSimpleLine/></EditButton.Icon>,
            'Editar Publicação'
        ]
    },
    argTypes: {
        children:{
            table: {
                disable: true
            }
        }
    }
} as Meta<EditButtonRootProps>

export const Default = {}

export const WithoutIcon: StoryObj<EditButtonRootProps> = {
    args: {
        children: 'Editar Publicação'
    }
} 