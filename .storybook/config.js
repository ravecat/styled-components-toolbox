import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

setOptions({
  name: `styled-components-toolbox`,
  url: "https://github.com/ravecat/styled-components-toolbox",
  addonPanelInRight: true
});

configure(loadStories, module);
