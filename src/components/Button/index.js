import { withTheme } from "common/helpers";
import { compose, renderComponent, branch } from "recompose";
import "common/globalStyles";
import Button from "./Button.tsx";
import ButtonLink from "./ButtonLink.tsx";

export default compose(
  withTheme,
  branch(({ href }) => href, renderComponent(ButtonLink))
)(Button);
