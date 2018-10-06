import * as React from "react";
import styled from "styled-components";
import Mixin from "common/mixin";

interface TimestampProps {
  className: string;
  date: string;
}

const Timestamp = styled<TimestampProps>(({ date, className }) => (
  <span className={className}>{date}</span>
))`
  color: ${({ theme }) => theme.primaryTextColor};
  ${Mixin.setThemeFont()};
`;

export default Timestamp;
