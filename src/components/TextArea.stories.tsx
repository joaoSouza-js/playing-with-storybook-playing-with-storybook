import {Meta, StoryObj} from '@storybook/react'

import { TextArea, TextAreaProps } from './TextArea'

export default  {
    title: 'Components/TextArea',
    component: TextArea,
    args: {
        placeholder: 'Escreva um comentário...'
    }
} as Meta<TextAreaProps>


export const Default: StoryObj<TextAreaProps> = {}