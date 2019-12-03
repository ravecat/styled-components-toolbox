import { lifecycle } from "recompose";

import Accordion from "./Accordion";

export default lifecycle({
  componentDidMount() {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        const details = mutation.target;

        if (!details.open) {
          return;
        }

        document.querySelectorAll("div > details[open]").forEach(el => {
          if (el === details) {
            return;
          }

          el.open = false;
        });
      });
    });

    const config = {
      attributeFilter: ["open"],
      attributes: true
    };

    document
      .querySelectorAll("div > details")
      .forEach(el => observer.observe(el, config));
  }
})(Accordion);
