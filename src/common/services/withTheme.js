import React from "react";
import { theme } from "common/theme";

const ThemeContext = React.createContext(theme);

const withTheme = Component => props => (
  <ThemeContext.Consumer>
    {theme => <Component {...props} theme={theme} />}
  </ThemeContext.Consumer>
);

export default withTheme;
