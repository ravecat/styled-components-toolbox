import { withState, withHandlers, compose } from "recompose";
import { withTheme } from "common/helpers";
import Collapse from "./Collapse";

export default compose(
  withTheme,
  withState("condition", "handleClick", false),
  withHandlers({
    handleClick: ({ handleClick }) => () =>
      handleClick((condition: boolean) => !condition)
  })
)(Collapse);
