import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { expect, fn, userEvent, within } from "storybook/test";

import ButtonGradient from "./gradient";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Shared/UI/Button/Gradient",
  component: ButtonGradient,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "radio",
      options: ["link", "text", "default", "primary", "dashed"],
      table: {
        defaultValue: {
          summary: "primary",
        },
      },
    },
    size: {
      control: "radio",
      options: ["small", "middle", "large"],
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { children: "Click Me!", onClick: fn() },
} satisfies Meta<typeof ButtonGradient>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    type: "primary",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: args.children?.toString(),
    });
    await userEvent.click(button);
    expect(args.onClick).toHaveBeenCalled();
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    type: "primary",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: args.children?.toString(),
    });
    await userEvent.click(button);
    expect(args.onClick).not.toHaveBeenCalled();
  },
};
