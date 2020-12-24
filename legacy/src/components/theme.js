/* @flow */

export type Theme = {
  // colors
  darkPrimaryColor: string,
  lightPrimaryColor: string,
  primaryColor: string,
  primaryTextColor: string,
  secondaryTextColor: string,
  textColor: string,
  accentColor: string,
  dividerColor: string,

  // fonts
  fontFamily: string,
  fontSize: number,
  fontWeight: number,

  // margings, sizes, borders
  boxSizing: string,
  border: number,
  verticalAlign: string,
  iconWidth: number,
  iconHeight: number
};

export const theme: Theme = {
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

  // margings, sizes, borders
  boxSizing: "border-box",
  border: 0,
  verticalAlign: "baseline",
  iconWidth: 30,
  iconHeight: 30
};
