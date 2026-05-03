import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { ColumnType, Table } from './Table';



const alignRight: ColumnType[] = [
  {
    title: 'Title',
    key: "price",
    align: 'end',
  },
  {
    title: 'Title',
    key: "floorDiffer",
    align: 'end',

  },
  {
    title: 'Title',
    key: "exp",
    align: 'end',

  },
  {
    title: 'Title',
    key: "from",
    align: 'end',

  },
  {
    title: 'Title',
    key: "action",
    align: 'end',
  },
];
const alignCenter: ColumnType[] = [
  {
    title: 'Title',
    key: "price",
    align: 'center',
  },
  {
    title: 'Title',
    key: "floorDiffer",
    align: 'center',

  },
  {
    title: 'Title',
    key: "exp",
    align: 'center',

  },
  {
    title: 'Title',
    key: "from",
    align: 'center',

  },
  {
    title: 'Title',
    key: "action",
    align: 'center',
  },
];
const dataDefault = Array.from({ length: 5 }).map((_, idx) => ({
  price: '-',
  floorDiffer: '-',
  exp: '-',
  from:'-',
  action: '-',
}));


// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/Table',
  component: Table,
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
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'p-[24px]'
  },
};

export const Background: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    className: 'bg-background-secondary rounded-xl  p-[24px]'
  },
};

export const Empty: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    isEmpty: true,
    className: 'bg-background-secondary rounded-xl min-w-[70vw]'
  },
};

export const AlignRight: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    columns: alignRight,
    dataSource: dataDefault,
  },
};
export const AlignCenter: Story = {
  globals: {
    backgrounds: { value: 'dark' },
  },
  args: {
    columns: alignCenter,
    dataSource: dataDefault,
  },
};








