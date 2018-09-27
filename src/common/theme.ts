import * as styledComponents from "styled-components";
import { ThemedStyledComponentsModule } from "styled-components";

export interface ThemeInterface {
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

  // margings, sizes
  boxSizing: string;
  iconWidth: number;
  iconHeight: number;
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
  fontSize: 14,
  fontWeight: 400,

  // margings, sizes
  boxSizing: "border-box",
  iconWidth: 30,
  iconHeight: 30
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
