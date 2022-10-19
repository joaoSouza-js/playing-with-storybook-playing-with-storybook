import {Meta, StoryObj} from '@storybook/react'
import {PencilSimpleLine} from 'phosphor-react'

import { Button, ButtonRootProps } from './Button'

export default {
    title: 'Components/Button',
    component: Button.Root,
    args: {
        children: [
            <Button.Icon><PencilSimpleLine/></Button.Icon>,
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
} as Meta<ButtonRootProps>

export const Default = {}

export const WithoutIcon: StoryObj<ButtonRootProps> = {
    args: {
        children: 'Editar Publicação'
    }
} 