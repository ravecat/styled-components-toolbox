import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    darkPrimaryColor: string;
    lightPrimaryColor: string;
    primaryColor: string;
    primaryTextColor: string;
    secondaryTextColor: string;
    neutralColor: string;
    accentColor: string;
    dividerColor: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    boxSizing: string;
    border: number;
    verticalAlign: string;
    iconWidth: number;
    iconHeight: number;
  }
}
