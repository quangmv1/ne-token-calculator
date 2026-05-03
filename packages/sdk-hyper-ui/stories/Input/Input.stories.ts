import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Input } from './Input';



// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
 
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'text-font-size-14'

  },
};

export const WithLabel: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    label: 'Label',
    className: 'text-font-size-14'
  },
};

export const Size40: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
      sizeInput: '40',
    className: 'text-font-size-13'
  },
};

export const Size48: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    sizeInput: '48',
    className: 'text-font-size-14'
  },
};

export const WithVerified: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    sizeInput: '40',
    isVerified: true,
    className: 'text-font-size-13'
  },
};

export const ContentLeft: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    sizeInput: '40',
    isVerified: true,
    className: 'text-font-size-13',
    coverLeft: 'Left',
  },
};
export const ContentRight: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    sizeInput: '40',
    isVerified: true,
    className: 'text-font-size-13',
    coverRight: 'Right',
  },
};

export const Area: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
   
    className: 'text-font-size-13 w-[400px]',
    type: 'area',
  },
};
export const FormatNumber: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
   
    className: 'text-font-size-13 w-[400px]',
    type: 'format',
  },
};

export const SearchBarEmpty: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'text-font-size-13 w-[400px]',
    searchBar: true,
  },
};
export const SearchBar: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'text-font-size-13 w-[400px]',
    searchBar: true,
    value: 'Search value',
  },
};

export const ErrorLine: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    sizeInput: '40',
    type: 'email',
    isLineError: true,
    className: 'text-font-size-13',
  },
};

export const ErrorMessage: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    sizeInput: '40',
    type: 'email',
    isLineError: true,
    className: 'text-font-size-13',
    customMessage: (type) =>
      "Please enter a valid email address."
  },
};




