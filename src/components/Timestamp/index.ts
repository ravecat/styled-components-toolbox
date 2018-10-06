import { compose } from "recompose";
import { withTheme } from "common/helpers";
import Timestamp from "./Timestamp";
import withDate from "./helpers/withDate";

export default compose(
  withTheme,
  withDate
)(Timestamp);
