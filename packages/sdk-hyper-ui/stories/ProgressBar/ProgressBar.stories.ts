import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ProgressBar } from './ProgressBar';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/ProgressBar',
  component: ProgressBar,
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
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'w-[300px]',
    value: 50,
  },
};

export const Loading: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'w-[300px]',
    isIndeterminate: true,
  },
};





