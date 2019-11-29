import { renderComponent, branch } from "recompose";

import ButtonLink from "./components/ButtonLink";
import Button from "./Button";

export default branch(({ href }) => href, renderComponent(ButtonLink))(Button);
