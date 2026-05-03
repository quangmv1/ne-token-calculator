import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Callout } from './Callout';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Callout',
  component: Callout,
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
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const StateDefault: Story = {
  args: {
    description: 'Description',
    title: 'Callout Title',
    variant: 'neutral',
    type: 'horizontal',
    className: 'max-w-[400px]'
  },
};

export const HiddenTitle: Story = {
  args: {
    description: 'Description',
    variant: 'neutral',
  },
};
export const ButtonHorizontal: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    variant: 'neutral',
    titleButton: 'Button',
    type: 'horizontal',
  },
};
export const ButtonVertical: Story = {
  args: {
    title: 'Title',
    description: 'Description',
    variant: 'neutral',
    titleButton: 'Button',
    type: 'vertical',
  },
};

export const StateInformation: Story = {
  args: {
    description: 'Description',
    title: 'Callout Title',
    variant: 'information',
  },
};
export const StateWarning: Story = {
  args: {
    description: 'Description',
    title: 'Callout Title',
    variant: 'warning',
  },
};

export const StateError: Story = {
  args: {
    description: 'Description',
    title: 'Callout Title',
    variant: 'error',
  },
};



