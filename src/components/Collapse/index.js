import { withState, withHandlers, compose } from "recompose";
import { withTheme } from "common/services";
import Collapse from "./Collapse";

export default compose(
  withTheme,
  withState("condition", "handleClick", false),
  withHandlers({
    handleClick: ({ handleClick }) => () =>
      handleClick(condition => !condition)
  })
)(Collapse);
