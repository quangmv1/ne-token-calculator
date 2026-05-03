import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Countdown } from './Countdown';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Countdown',
  component: Countdown,
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
} satisfies Meta<typeof Countdown>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    value: 50,
  }
};
export const Loop: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    value: 10,
    loop: true,
  }
};








