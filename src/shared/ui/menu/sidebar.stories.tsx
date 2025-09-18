import {
  HomeOutlined,
  SelectOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import MenuSidebar from "./sidebar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Shared/UI/Menu/Sidebar",
  component: MenuSidebar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
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
  args: {
    items: [
      {
        key: "/dashboard",
        icon: <HomeOutlined />,
        label: "Dashboard",
      },
      {
        key: "/supplier",
        icon: <UsergroupAddOutlined />,
        label: "Supplier Management",
        children: [
          { key: "/supplier/dashboard", label: "Dashboard" },
          { key: "/supplier/list", label: "Supplier List" },
          {
            key: "/supplier/review-approval",
            label: "Preview & Approvals",
          },
          {
            key: "/supplier/configuration",
            label: "Configurations",
          },
        ],
      },
      {
        key: "/funnel-management",
        icon: <SelectOutlined />,
        label: "Funnel Management",
        children: [{ key: "/funnel-management/dashboard", label: "Dashboard" }],
      },
    ],
  },
  decorators: [
    (Outlet) => (
      <div className="h-screen">
        <Outlet />
      </div>
    ),
  ],
} satisfies Meta<typeof MenuSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    pathName: "/dashboard",
  },
};

export const Child: Story = {
  args: {
    pathName: "/supplier/configuration",
  },
};

export const Account: Story = {
  args: {
    pathName: "/account/setting",
  },
};
