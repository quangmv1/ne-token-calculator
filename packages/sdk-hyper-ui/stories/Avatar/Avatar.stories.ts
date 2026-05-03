import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ThumbSymbol } from "../ThumbSymbol/ThumbSymbol";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Avatar",
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
  
  args: {
    size: "48",
    alt: "A",
    isCircle  : true,
  },
};

export const UserNameInAvatar: Story = {

  args: {
    isCircle: true,
    size: "48",
    alt: "Abc",
    src: ""
  },
};


export const Size16: Story = {

  args: {
    isCircle: true,
    size: "16",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};
export const Size20: Story = {
  
  args: {
    isCircle: true,
    size: "20",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};
export const Size24: Story = {
  
  args: {
    isCircle: true,
    size: "24",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};
export const Size32: Story = {
  
  args: {
    isCircle: true,
    size: "32",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};
export const Size40: Story = {
  
  args: {
    isCircle: true,
    size: "40",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};


export const Size48: Story = {
  
  args: {
    isCircle: true,
    size: "48",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};
export const Size56: Story = {
  
  args: {
    isCircle: true,
    size: "56",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};

export const Size64: Story = {
  
  args: {
    isCircle: true,
    size: "64",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};

export const Size80: Story = {
  
  args: {
    isCircle: true,
    size: "80",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};


export const Size96: Story = {
  
  args: {
    isCircle: true,
    size: "96",
    alt: "A",
    srcChain:
      "https://icons.llamao.fi/icons/chains/rsz_tomochain.jpg",
  },
};


