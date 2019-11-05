import React from "react";
import styled from "styled-components";
import Icon from "components/Icon";
import { upArrow, downArrow } from "common/assets";

const CollapseIcon = ({ condition, onClick }) => (
  <CustomIcon
    alternative={upArrow}
    asset={downArrow}
    condition={condition}
    height={15}
    onClick={onClick}
    pointer
    width={15}
  />
);

const CustomIcon = styled(Icon)`
  display: table-cell;
  vertical-align: middle;
`;

export default CollapseIcon;
