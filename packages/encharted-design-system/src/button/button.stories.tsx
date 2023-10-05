import type { Meta, StoryObj } from '@storybook/react'
import Button from './button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: 'This is a button!',
  },
}

export const Secondary = {
  args: {
    secondary: true,
    children: 'This is a button!',
    style:{
      border: '1px solid gray',
      borderRadius: 10,
      color: 'blue',
      padding: 10
    },
    type:"button"
  },
}
