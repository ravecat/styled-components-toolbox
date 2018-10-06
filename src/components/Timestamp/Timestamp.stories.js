import * as React from "react";
import { text, select } from "@storybook/addon-knobs";
import { setDefaultStory } from "common/helpers";
import Timestamp from "./index";
import * as readme from "./README.md";

const DEFAULT = "2018-10-08T18:31:42";
const OPTIONS = [
  "2018-10-08T18:31:42",
  "2017-09-08",
  "2016-08-08T18:31:42.201",
  "--06-08",
  "2015-07-08T21:48:51Z",
  "2014-06-08T21:48:51+00:00"
];

setDefaultStory("Timestamp", readme, () => (
  <Timestamp
    mask={text("mask", "bDYt")}
    value={select("value", OPTIONS, DEFAULT)}
  />
));
