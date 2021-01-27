import { createTemplate } from "stories/utils/template";
import { createStory } from "stories/utils/story";
import { Collapse } from "components/Collapse";
import type { CollapseProps } from "components/Collapse";

const CONTENT = `The chemical compound isobutyl acetate, also known as 2-methylpropyl ethanoate (IUPAC name)
or β-methylpropyl acetate, is a common solvent. It is produced from the esterification of isobutanol with acetic acid.
It is used as a solvent for lacquer and nitrocellulose. Like many esters it has a fruity or floral smell at 
low concentrations and occurs naturally in raspberries, pears and other plants. At higher concentrations the odor
can be unpleasant and may cause symptoms of central nervous system depression such as nausea, dizziness and headache.`;

export default createStory<CollapseProps>({
  title: "Collapse",
  component: Collapse,
  exclude: ["ref", "theme", "forwardedAs", "as"],
  args: {
    label: "Label",
  },
});

export const Default = createTemplate<CollapseProps>(Collapse);
