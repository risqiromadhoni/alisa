"use client";

import { QuestionCircleOutlined, UserOutlined } from "@ant-design/icons";
import type { GetProps } from "antd";
import { Divider, Flex, Menu } from "antd";
import { type usePathname, useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import LinkLogo from "../link/logo";

type MenuProps = GetProps<typeof Menu>;
type MenuSidebarProps = Omit<MenuProps, "onClick"> & {
  /**
   * @default "inline"
   */
  mode?: MenuProps["mode"];
  /**
   * The current URL pathname from Next.js App Router.
   *
   * Example: `/supplier-management/dashboard`
   *
   * @see https://nextjs.org/docs/app/api-reference/functions/use-pathname
   */
  pathName: NonNullable<ReturnType<typeof usePathname>>;
};

const bottomMenuItems: NonNullable<MenuProps["items"]> = [
  {
    key: "/help-and-support",
    icon: <QuestionCircleOutlined />,
    label: "Help & Support",
  },
  {
    key: "/account",
    icon: <UserOutlined />,
    label: "John Doe",
    children: [
      { key: "/account/setting", label: "Setting" },
      { key: "/account/logout", label: "Logout" },
    ],
  },
];

const MenuSidebar: React.FC<MenuSidebarProps> = ({
  pathName,
  items = [],
  mode = "inline",
  ...props
}) => {
  const router = useRouter();

  const combinedItems = useMemo(() => [...items, ...bottomMenuItems], [items]);

  const allKeys = useMemo(() => {
    const keys: string[] = [];

    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: for now use this logic
    const collectKeys = (menuItems?: MenuProps["items"]) => {
      if (!menuItems) {
        return;
      }
      for (const item of menuItems) {
        if (!item) {
          continue;
        }
        if ("key" in item && item.key) {
          keys.push(item.key as string);
        }
        if ("children" in item && item.children) {
          collectKeys(item.children);
        }
      }
    };

    collectKeys(combinedItems);
    return keys;
  }, [combinedItems]);

  const selectedKeys = useMemo(() => {
    return allKeys.includes(pathName) ? [pathName] : [];
  }, [allKeys, pathName]);

  const openKeys = useMemo(() => {
    const keys: string[] = [];

    // biome-ignore lint/complexity/noExcessiveCognitiveComplexity: for now use this logic
    const findParent = (menuItems?: MenuProps["items"], parentKey?: string) => {
      if (!menuItems) {
        return;
      }

      for (const item of menuItems) {
        if (!item) {
          continue;
        }

        if ("key" in item && item.key === pathName && parentKey) {
          keys.push(parentKey);
        }

        if ("children" in item && item.children) {
          findParent(item.children, item.key as string);
        }
      }
    };

    if (allKeys.includes(pathName)) {
      findParent(combinedItems);
    }

    return keys;
  }, [combinedItems, pathName, allKeys]);

  const onClick = useCallback<NonNullable<MenuProps["onClick"]>>(
    ({ key }) => {
      if (typeof key !== "string" && !allKeys.includes(key)) {
        return;
      }
      return router.push(key);
    },
    [router, allKeys]
  );

  return (
    <Flex
      className="!h-full !py-4 border-r border-r-[rgba(5,5,5,0.06)]"
      vertical
    >
      <LinkLogo className="ml-7" href="/dashboard" />
      <Divider />
      <Menu
        className="flex-1"
        defaultOpenKeys={openKeys}
        items={items}
        mode={mode}
        onClick={onClick}
        rootClassName="!border-0"
        selectedKeys={selectedKeys}
        {...props}
      />
      <Divider />
      <Menu
        defaultOpenKeys={openKeys}
        items={bottomMenuItems}
        mode={mode}
        onClick={onClick}
        rootClassName="!border-0"
        selectedKeys={selectedKeys}
        {...props}
      />
    </Flex>
  );
};

export default MenuSidebar;
