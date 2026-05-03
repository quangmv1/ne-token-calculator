import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Toast } from './Toast';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Toast',
  component: Toast,
  globals: {
    // 👇 Override background value for this story
    backgrounds: { value: 'dark' },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Main content',
    description: 'Secondary content that may span multiple lines and provide additional context to the user.',
  },
};
export const Prefix: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Main content',
    description: 'Secondary content that may span multiple lines and provide additional context to the user.',
    prefix: 'prefix'
  },
};
export const Suffix: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Main content',
    description: 'Secondary content that may span multiple lines and provide additional context to the user.',
    suffix: 'Suffix'
  },
};
export const Below: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Main content',
    description: 'Secondary content that may span multiple lines and provide additional context to the user.',
    below: 'Below'
  },
};




