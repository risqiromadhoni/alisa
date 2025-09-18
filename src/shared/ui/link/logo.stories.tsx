import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import LinkLogo from "./logo";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Shared/UI/Link/Logo",
  component: LinkLogo,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "radio",
      // biome-ignore lint/style/noMagicNumbers: option follow ant default props
      options: [1, 2, 3, 4, 5],
      table: {
        defaultValue: {
          summary: "3",
        },
      },
    },
  },
} satisfies Meta<typeof LinkLogo>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    level: 3,
    href: "/",
  },
};
