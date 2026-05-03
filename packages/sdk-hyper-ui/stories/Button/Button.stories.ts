import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: 'Button',
  },
};

export const GhostPrimary: Story = {
  args: {
    children: 'Button',
    type: 'ghostPrimary'
  },
};
export const Secondary: Story = {
  args: {
    children: 'Button',
    type: 'secondary'
  },
};
export const SecondaryStatic: Story = {
  args: {
    children: 'Button',
    type: 'secondaryStatic'
  },
};
export const InverseSecondary: Story = {
  args: {
    children: 'Button',
    type: 'inverseSecondary'
  },
};
export const InverseSecondaryStatic: Story = {
  args: {
    children: 'Button',
    type: 'inverseSecondaryStatic'
  },
};
export const GhostSecondary: Story = {
  args: {
    children: 'Button',
    type: 'ghostSecondary'
  },
};
export const Long: Story = {
  args: {
    children: 'Button',
    type: 'long'
  },
};
export const Short: Story = {
  args: {
    children: 'Button',
    type: 'short'
  },
};

export const XLarge: Story = {
  args: {
    size: 'xl',
    children: 'Button',
  },
};
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Button',
  },
};
export const Base: Story = {
  args: {
    size: 'base',
    children: 'Button',
  },
};
export const Medium: Story = {
  args: {
    size: 'md',
    children: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Button',
  },
};

export const FullWidth: Story = {
  args: {
    size: 'md',
    children: 'Button',
    className: 'w-[400px]',
    isFullWidth: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Button',
    isLoading: true,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    isDisabled: true,
  },
};

