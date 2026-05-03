import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Modal } from './Modal';




// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Modal',
  component: Modal,
  globals: {
    // 👇 Override background value for this story
    backgrounds: { value: 'dark' },
  },
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    titlePrimary: "Button",
    titleSecondary: "Button",
    size: 'base'
  },
};
export const Small: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    titlePrimary: "Button",
    titleSecondary: "Button",
    size: 'small'
  },
};
export const Large: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    titlePrimary: "Button",
    titleSecondary: "Button",
    size: 'large',
    className: 'w-[1000px]'
  },
};

export const WithBack: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    isShowPrefix: true,
    titlePrimary: "Button",
    titleSecondary: "Button",
  },
};

export const HiddenHeading: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    titlePrimary: "Button",
    titleSecondary: "Button",
  },
};

export const WithClose: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    isShowSuffix: true,
    titlePrimary: "Button",
    titleSecondary: "Button",
  },
};

export const WithSuffixPrefix: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    isShowSuffix: true,
    isShowPrefix: true,
    titlePrimary: "Button",
    titleSecondary: "Button",
  },
};
export const WithConfirm: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    heading: 'Modal Title',
    titlePrimary: "Button",
  },
};
