import * as React from "react";
import styled from "common/theme";
import BaseComponent, { BaseProps } from "common/components/BaseComponent";

interface LinkProps extends BaseProps {
  href?: string;
  anchor?: boolean;
}

const Link = styled<LinkProps>(({ children, ...rest }) => (
  <BaseComponent as="a" {...rest}>
    <span>{children}</span>
  </BaseComponent>
)).attrs({
  href: ({ href }: LinkProps) => href || "#",
  target: ({ anchor }: LinkProps) => (anchor ? "_self" : "_blank")
})`
  color: ${({ theme }) => theme.darkPrimaryColor};
  text-decoration: none;
`;

export default Link;
