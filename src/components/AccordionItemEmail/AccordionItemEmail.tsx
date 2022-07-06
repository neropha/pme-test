import React, { useState } from "react";
import { Button } from "react-bootstrap";
import user from "../../data/user";
import ChangeEmailModal from "../ChangeEmailModal/ChangeEmailModal";

const AccordionItemProfile = (props: any) => {
  const [isOpen, setShow] = useState(false);
  const handleShow = () => setShow(true);

  return (
    <div id="AccordionProfile">
      <p>Du hast eine neue E-Mail-Adresse? Hier kannst du jederzeit deine E-Mail-Adresse ändern.</p>
      <p>
        Deine aktuelle E-Mail-Adresse: <strong>{user.email}</strong>
      </p>

      <ChangeEmailModal></ChangeEmailModal>
    </div>
  );
};

export default AccordionItemProfile;
