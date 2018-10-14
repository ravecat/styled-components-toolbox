import * as React from "react";
import { Icon } from "components";
import styled from "common/theme";
import { upArrow, downArrow } from "common/assets";

const CollapseIcon = ({
  condition,
  onClick
}: {
  condition: boolean;
  onClick(condition: boolean): boolean;
}) => (
  <CustomIcon
    alternative={upArrow}
    asset={downArrow}
    condition={condition}
    onClick={onClick}
  />
);

const CustomIcon = styled(Icon)`
  display: table-cell;
  width: 15px;
  height: 15px;
  vertical-align: middle;

  :hover {
    cursor: pointer;
  }
`;

export default CollapseIcon;
