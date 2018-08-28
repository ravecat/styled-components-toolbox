import { withTheme } from "common/helpers";
import { compose, renderComponent, branch } from "recompose";
import "common/globalStyles";
import Button from "./Button";
import ButtonLink from "./ButtonLink";

export default compose(
  withTheme,
  branch(({ href }) => href, renderComponent(ButtonLink))
)(Button);
