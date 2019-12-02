import React, { useEffect } from "react";
import styled from "styled-components";

export const Accordion = ({ children }) => {
  useEffect(() => {
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
      attributeFilter: ["open"]
    };

    document
      .querySelectorAll("div > details")
      .forEach(el => observer.observe(el, config));

    return () => observer.disconnect();
  });

  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;

  details {
    margin-bottom: 2px;
  }
`;
