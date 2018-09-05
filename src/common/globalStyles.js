import { injectGlobal } from "styled-components";
import { normalize } from "polished";
import RobotoThinTTF from "./fonts/Roboto-Thin.ttf";
import RobotoLightTTF from "./fonts/Roboto-Light.ttf";
import RobotoRegularTTF from "./fonts/Roboto-Regular.ttf";
import RobotoMediumTTF from "./fonts/Roboto-Medium.ttf";
import RobotoBoldTTF from "./fonts/Roboto-Bold.ttf";

injectGlobal`
  ${normalize()};

  * {
    font-family: Roboto, sans-serif;
    box-sizing: border-box;
    font-size: 14px;
  }

  [hidden] {
    display: none !important;
  }
  
  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoThinTTF}) format('truetype');
    font-weight: 100;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoLightTTF}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoRegularTTF}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoMediumTTF}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Roboto';
    src: url(${RobotoBoldTTF}) format('truetype');
    font-weight: 700;
    font-style: normal;
  }
`;