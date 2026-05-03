import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Slider } from './Slider';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Slider',
  component: Slider,
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
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    value: [50],
    min: 0,
    max:100,
    defaultValue: [0],
    onValueChange: (value) => {
      console.log('Slider value changed to:', value);
    },
    className: 'w-[400px]'
  },
};
export const WithTickMark: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    value: [50],
    percentMarks: [0, 25, 50, 75, 100],
    min: 0,
    max:100,
    defaultValue: [0],
    onValueChange: (value) => {
      console.log('Slider value changed to:', value);
    },
    className: 'w-[400px]'
  },
};

export const WithStart: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    value: [0],
    percentMarks: [0, 25, 50, 75, 100],
    min: 0,
    max:100,
    defaultValue: [0],
    onValueChange: (value) => {
      console.log('Slider value changed to:', value);
    },
    className: 'w-[400px]'
  },
};

export const WithEnd: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    value: [100],
    percentMarks: [0, 25, 50, 75, 100],
    min: 0,
    max:100,
    defaultValue: [0],
    onValueChange: (value) => {
      console.log('Slider value changed to:', value);
    },
    className: 'w-[400px]'
  },
};




