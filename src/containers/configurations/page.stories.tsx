import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import RootLayout from "../root/layout";
import ConfgurationLayout from "./layout";
import ConfgurationPage from "./page";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Pages/SupplierManagement/Configuration",
  component: ConfgurationPage,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "fullscreen",
    nextjs: {
      appDirectory: true,
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    pathName: {
      control: "text",
      description: "The current URL pathname from Next.js App Router.",
    },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {},
  decorators: [
    (Outlet) => (
      <RootLayout>
        <ConfgurationLayout>
          <Outlet />
        </ConfgurationLayout>
      </RootLayout>
    ),
  ],
} satisfies Meta<typeof ConfgurationPage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {},
};
