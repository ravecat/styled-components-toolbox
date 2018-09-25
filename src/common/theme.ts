import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

interface ThemeInterface {
  darkPrimaryColor: string;
  lightPrimaryColor: string;
  primaryColor: string;
  primaryTextColor: string;
  secondaryTextColor: string;
  textColor: string;
  accentColor: string;
  dividerColor: string;

  //fonts
  fontFamily: string;
  fontSize: string;

  // margings
  boxSizing: string;
}

export const theme = {
  // colors
  darkPrimaryColor: "#303F9F",
  lightPrimaryColor: "#C5CAE9",
  primaryColor: "#3F51B5",
  primaryTextColor: "#212121",
  secondaryTextColor: "#757575",
  textColor: "#FFFFFF",
  accentColor: "#448AFF",
  dividerColor: "#BDBDBD",

  // fonts
  fontFamily: "Roboto, sans-serif",
  fontSize: "14px",

  //margins
  boxSizing: "border-box"
};

const {
  default: styled,
  css,
  injectGlobal,
  keyframes,
  ThemeProvider
} = styledComponents as ThemedStyledComponentsModule<ThemeInterface>;

export default styled;
export { css, injectGlobal, keyframes, ThemeProvider };
