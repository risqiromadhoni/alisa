"use client";
import { Flex, Typography } from "antd";
import type { AppLayoutProps } from "@/entities/types/next";

const ConfgurationLayout = ({ children }: AppLayoutProps) => {
  return (
    <Flex className="!px-4 !py-6 h-full flex-1 bg-zinc-50" gap={2} vertical>
      <div className="container mx-auto">
        <Typography.Title level={3}>Configurations</Typography.Title>
        {children}
      </div>
    </Flex>
  );
};

export default ConfgurationLayout;
