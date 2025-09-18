"use client";
import {
  HomeOutlined,
  SelectOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Flex } from "antd";
import { usePathname } from "next/navigation";
import type { AppLayoutProps } from "@/entities/types/next";
import MenuSidebar from "@/shared/ui/menu/sidebar";

const sidebarMenuItems = [
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
];

const AppRootLayout = ({ children }: AppLayoutProps) => {
  const pathName = usePathname();
  return (
    <Flex
      className="h-screen w-screen flex-row items-center justify-center overflow-hidden"
      component="main"
      gap={2}
    >
      <MenuSidebar
        items={sidebarMenuItems}
        pathName={pathName ?? "/dashboard"}
      />
      {children}
    </Flex>
  );
};

export default AppRootLayout;
