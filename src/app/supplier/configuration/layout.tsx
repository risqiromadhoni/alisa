import ConfgurationLayout from "@/containers/configurations/layout";
import type { AppLayoutProps } from "@/entities/types/next";

const SupplierConfigurationLayout = ({ children }: AppLayoutProps) => {
  return <ConfgurationLayout>{children}</ConfgurationLayout>;
};

export default SupplierConfigurationLayout;
