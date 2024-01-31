import React from "react";

type AccordionPropsType = {
  title: string;
  collapsed: boolean;
};

function Accordion(props: AccordionPropsType) {
  //   console.log("Acc render");
  if (props.collapsed === true) {
    return (
      <>
        <AccordionTitle title={props.title} />
      </>
    );
  } else {
    return (
      <>
        <AccordionTitle title={props.title} />
        <AccordionBody title={props.title} />
      </>
    );
  }
}

type AccordionTitlePropsType = {
  title: string;
};

function AccordionTitle(props: AccordionTitlePropsType) {
  //   console.log("AccTitle render");
  return <h3>{props.title}</h3>;
}

function AccordionBody() {
  //   console.log("AccBody render");
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}

export default Accordion;
