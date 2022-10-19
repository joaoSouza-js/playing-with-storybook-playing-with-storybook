import {Meta, StoryObj} from '@storybook/react'

import { Text, TextProps } from './Text'

export default {
    title: 'Components/Text',
    component: Text,
    args: {
        children: 'Text Component'
    },
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
        asChild: {
            table: {
                disable: true
            }
        }
    }
} as Meta<TextProps>

export const Default = {} as StoryObj

export const Small = {
    args: {
        size: 'sm'
    },
  
} as StoryObj<TextProps>