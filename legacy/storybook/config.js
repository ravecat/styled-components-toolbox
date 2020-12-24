import { configure, addDecorator } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import { withKnobs } from "@storybook/addon-knobs";

import centerStory from "./decorators/centerStory";

// automatically import all files ending in *.stories.js
const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withKnobs);
addDecorator(centerStory);

setOptions({
  name: `styled-components-toolbox`,
  url: "https://github.com/ravecat/styled-components-toolbox",
  addonPanelInRight: true
});

configure(loadStories, module);
