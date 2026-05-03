import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Empty } from './Empty';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Empty',
  component: Empty,
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
} satisfies Meta<typeof Empty>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const FullScreen: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isSection: false,
    title: 'Empty state title',
    description: 'Empty state description',
    titleButton: 'Button'
  },
};
export const Section: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isSection: true,
    title: 'Empty state title',
    description: 'Empty state description',
    titleButton: 'Button'
  },
};

export const HiddenButton: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isSection: true,
    title: 'Empty state title',
    description: 'Empty state description',
  },
};



