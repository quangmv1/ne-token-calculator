import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Badge } from './Badge';


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    size: 'md',
    variant: 'default',
  },
};
export const Tiny: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    variant: 'hightlight',
  },
};
export const BadgeSM: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    size: 'md',
    variant: 'default',
  },
};
export const BadgeMD: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    size: 'md',
    variant: 'default',
  },
};
export const BadgeLG: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    size: 'lg',
    variant: 'default',
  },
};
export const HightLight: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'hightlight',
  },
};
export const Neutral: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'neutral',
  },
};
export const Positive: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'positive',
  },
};
export const Danger: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'danger',
  },
};
export const Informative: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'informative',
  },
};
export const Warning: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'warning',
  },
};
export const Inverse: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    children: 'Badge',
    variant: 'inverse',
  },
};


