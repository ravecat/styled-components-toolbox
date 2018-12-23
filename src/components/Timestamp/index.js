import { compose } from "recompose";
import { withTheme } from "common/services";
import withDate from "./services/withDate";
import Timestamp from "./Timestamp";

export default compose(
  withTheme,
  withDate
)(Timestamp);
