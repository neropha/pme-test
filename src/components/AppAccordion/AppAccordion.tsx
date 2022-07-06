import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Accordion } from "react-bootstrap";
import AccordionItemProfile from "../AccordionItemEmail/AccordionItemEmail";

const AccContent = [
  {
    title: "E-Mail-Benachrichtungen verwalten",
  },
  {
    title: "E-Mail-Adresse ändern",
  },
  {
    title: "Passwort ändern",
  },
  {
    title: "Onlinedarstellung verwalten",
  },
  {
    title: "Benutzerkonto löschen",
  },
];

const content = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.";

const AccordionComponent = () => {
  return (
    <div className="AppAccordion">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <FontAwesomeIcon className="text-primary" icon="at" /> {AccContent[0].title}
          </Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <FontAwesomeIcon className="text-primary" icon="envelope" /> {AccContent[1].title}
          </Accordion.Header>
          <Accordion.Body>
            <AccordionItemProfile />
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <FontAwesomeIcon className="text-primary" icon="lock" /> {AccContent[2].title}
          </Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <FontAwesomeIcon className="text-primary" icon="id-card" /> {AccContent[3].title}
          </Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <FontAwesomeIcon className="text-primary" icon="circle-xmark" /> {AccContent[4].title}
          </Accordion.Header>
          <Accordion.Body>{content}</Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default AccordionComponent;
