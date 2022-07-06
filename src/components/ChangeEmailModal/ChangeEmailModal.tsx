import React, { useState } from "react";
import { Alert, Button, Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface FormInputs {
  email1: string;
  email2: string;
}

const ChangeEmailModal = () => {
  const bodyText = "Bitte gib deine neue E-Mal-Adresse zweimal an. Deine alte E-Mail-Adresse wird damit für das Portal ungültig. Bei Angeboten oder Fragen werden wir dich künftig uber die neue E-Mail- Adresse kontaktieren. Um wieder alle Funktionen des Portals nutzen zu können, musst du deine neue E-Mail-Adresse bestätigen.";

  // Create form validation schema with YUP resolver

  const formSchema = Yup.object({
    email1: Yup.string()
      .required("Email ist ein Pflichtfeld.")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Ungültige E-Mail-Adresse"),
    email2: Yup.string()
      .required("Email ist ein Pflichtfeld.")
      .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Ungültige E-Mail-Adresse")
      .oneOf([Yup.ref("email1")], "E-Mail-Adressen sind unterschiedlich."),
  }).required();

  const [showSubmit, setShowSubmit] = useState(false);
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const [disable, setDisable] = useState(true);

  const {
    register,
    formState: { errors, isDirty },
    handleSubmit,
  } = useForm<FormInputs>({ resolver: yupResolver(formSchema) });

  const [getForm, setForm] = useState({
    email1: "",
    email2: "",
  });

  // Close Modal and set Submit Message
  const onSubmit = () => {
    handleClose();
    setShowSubmit(true);

    try {
      // Send data here
    } catch (err: any) {
      // Catch errors sending
    }
  };

  // react on form changes
  const handleChange = (e: any) => {
    const nextFormState = {
      ...getForm,
      [e.currentTarget.name]: e.currentTarget.value,
    };

    // Disable Submit when user changes inputs
    if (isDirty) {
      setDisable(false);
    }
    setForm(nextFormState);
  };

  return (
    <>
      {!showSubmit && (
        <Button variant="secondary" onClick={handleShow}>
          E-Mail-Adresse ändern
        </Button>
      )}

      <Alert transition show={showSubmit} className="mt-3">
        <Alert.Heading>Deine E-Mail-Adresse wurde erfolgreich geändert.</Alert.Heading>
        Deine neue E-Mail Adresse lautet: <strong>{getForm.email1}</strong>
        <br />
        Bitte klicke auf den Link in deiner Bestätigungsmail, um die Änderung abzuschließen.
      </Alert>

      <Modal show={show} centered onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>E-Mail-Adresse ändern</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <>
              <p>{bodyText}</p>
              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Neue E-Mail-Adresse" {...register("email1")} onChange={e => handleChange(e)} className={`${errors.email1 ? "is-invalid" : ""}`} />
              </Form.Group>
              <Alert show={typeof errors.email1 !== "undefined"} key="email1Alert" variant="secondary">
                {errors.email1?.message}
              </Alert>

              <Form.Group className="mb-3">
                <Form.Control type="email" placeholder="Neue E-Mail-Adresse wiederholen" {...register("email2")} onChange={e => handleChange(e)} className={`${errors.email2 ? "is-invalid" : ""}`} />
              </Form.Group>
              <Alert show={typeof errors.email2 !== "undefined"} key="email2Alert" variant="secondary">
                {errors.email2?.message}
              </Alert>
            </>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button type="submit" disabled={disable} variant="secondary" size="lg">
              Speichern
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};

export default ChangeEmailModal;
