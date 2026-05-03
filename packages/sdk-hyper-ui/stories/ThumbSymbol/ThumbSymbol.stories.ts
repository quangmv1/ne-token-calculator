import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThumbSymbol } from "./ThumbSymbol";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/ThumbSymbol",
  component: ThumbSymbol,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes

  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
} satisfies Meta<typeof ThumbSymbol>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    size: "48",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
  },
};

export const TokenWithChain: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "48",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};

export const DappWithChain: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    size: "48",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};

export const UserNameInAvatar: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "48",
    alt: "Abc",
    src: ""
  },
};
export const Size16: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "16",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};
export const Size20: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "20",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};
export const Size24: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "24",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};
export const Size32: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "32",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};
export const Size40: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "40",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};


export const Size48: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "48",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};
export const Size56: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "56",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};

export const Size64: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "64",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};

export const Size80: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "80",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};


export const Size96: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isCircle: true,
    size: "96",
    src: "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
    alt: "A",
    srcChain:
      "https://lh3.googleusercontent.com/_WoXIYFA61OlH42EYJjrbvQkVoVCDRTt-iy8Lrhl7vFL4V8i07oXyLo8AoRShQqtZQbn6JPYtfnFjKrL2BX5b9fDeA=s60",
  },
};


