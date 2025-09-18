"use client";
import type { GetProps } from "antd";
import { Button, ConfigProvider } from "antd";
import { createStyles } from "antd-style/lib/functions";

type ButtonProps = GetProps<typeof Button>;

type ButtonGradientProps = ButtonProps & {
  /**
   * @default "primary"
   */
  type?: ButtonProps["type"];
};

const useStyle = createStyles(({ prefixCls, css, token }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, ${token.pink}, ${token.colorPrimary});
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

const ButtonGradient: React.FC<ButtonGradientProps> = ({
  type = "primary",
  children,
  ...props
}) => {
  const { styles } = useStyle();
  return (
    <ConfigProvider
      button={{
        className: styles.linearGradientButton,
      }}
    >
      <Button type={type} {...props}>
        {children}
      </Button>
    </ConfigProvider>
  );
};

export default ButtonGradient;
