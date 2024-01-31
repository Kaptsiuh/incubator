import React from "react";

function Accordion(props: any) {
  console.log("Acc render");
  return (
    <>
      <AccordionTitle title={props.title} />
      <AccordionBody title={props.title} />
    </>
  );
}

function AccordionTitle(props: any) {
  //   console.log("AccTitle render");
  return <h3>{props.menu}</h3>;
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
