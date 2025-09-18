import { DollarTwoTone } from "@ant-design/icons";
import type { GetProps } from "antd";
import { Typography } from "antd";
import type { LinkProps } from "next/link";
import Link from "next/link";

type TypographyTitleProps = GetProps<typeof Typography.Title>;

type LinkLogoProps = Omit<TypographyTitleProps, "children"> &
  Pick<LinkProps, "href">;

const LinkLogo: React.FC<LinkLogoProps> = ({
  href,
  level = 3,
  className,
  ...props
}) => {
  return (
    <Link
      className={`group flex flex-row items-center gap-2 ${className}`}
      href={href}
    >
      <DollarTwoTone
        className="group-hover:!opacity-75 data-[level=1]:!text-4xl data-[level=2]:!text-3xl data-[level=3]:!text-2xl data-[level=4]:!text-xl data-[level=5]:!text-lg"
        data-level={level}
      />
      <Typography.Title
        className="group-hover:!opacity-75 !m-0"
        level={level}
        {...props}
      >
        Alisa
      </Typography.Title>
    </Link>
  );
};

export default LinkLogo;
