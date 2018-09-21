import { compose, renderComponent, branch } from "recompose";
import { withTheme } from "common/helpers";
import ButtonLink from "./components/ButtonLink";
import Button from "./Button";

export default compose(
  withTheme,
  branch(({ href }) => href, renderComponent(ButtonLink))
)(Button);
