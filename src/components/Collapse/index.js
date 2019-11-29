import { withState, withHandlers, compose } from "recompose";

import Collapse from "./Collapse";

export default compose(
  withState("condition", "handleClick", false),
  withHandlers({
    handleClick: ({ handleClick }) => () => handleClick(condition => !condition)
  })
)(Collapse);
