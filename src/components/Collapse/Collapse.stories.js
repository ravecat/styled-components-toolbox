import React from "react";
import { storiesOf } from "@storybook/react";
import styled from "styled-components";
import { text, boolean } from "@storybook/addon-knobs";

// import { Collapse } from "./index";
import { Collapse as BaseCollapse } from "./index";

// import Accordion from "components/Accordion";
import BaseAccordion from "components/Accordion";

const CONTENT = `The chemical compound isobutyl acetate, also known as 2-methylpropyl ethanoate (IUPAC name)
or β-methylpropyl acetate, is a common solvent. It is produced from the esterification of isobutanol with acetic acid.
It is used as a solvent for lacquer and nitrocellulose. Like many esters it has a fruity or floral smell at 
low concentrations and occurs naturally in raspberries, pears and other plants. At higher concentrations the odor
can be unpleasant and may cause symptoms of central nervous system depression such as nausea, dizziness and headache.`;

storiesOf("Collapse", module).add("Default", () => (
  <Collapse
    details={boolean("details", false)}
    summary={text("summary", "Summary")}
  >
    {text("children", CONTENT)}
  </Collapse>
));

storiesOf("Collapse", module).add("Accordion", () => (
  <Accordion>
    <Collapse details={true} summary="Summary">
      {CONTENT}
    </Collapse>
    <Collapse details={true} summary="Summary">
      {CONTENT}
    </Collapse>
    <Collapse details={true} summary="Summary">
      {CONTENT}
    </Collapse>
  </Accordion>
));

const Accordion = styled(BaseAccordion)`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
`;

const Collapse = styled(BaseCollapse)`
  flex-basis: 50%;
  padding: 0 1px;
`;
