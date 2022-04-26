import { observer } from "mobx-react";
import { Form, Modal, Button } from "react-bootstrap";
import { modal } from "../../BLL/Modal";
import { reports } from "../../BLL/Reports";
import { ModalRoutes } from "../../consts/modal-routes";
import { Formik } from "formik";

export const ReportsEditModal = observer(() => {
  return (
    <Modal
      id="reports-edit"
      onHide={modal.hide}
      show={modal.visible === ModalRoutes.reportsEdit}
    >
      <Modal.Header id="report-eidt-modal-header" closeButton>
        <Modal.Title>Edit reports</Modal.Title>
      </Modal.Header>
      <Formik
        onSubmit={(values) => {}}
        validate={(values) => {}}
        initialValues={{
          group: "",
          labNumber: null as number | null,
          name: "",
          points: null as number | null,
          githubURL: "",
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Modal.Body id="report-insert-modal-body">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label
                    id="report-edit-modal-body-input-group-label"
                    htmlFor="report-insert-modal-body-input-group"
                  >
                    Group
                  </Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    value={values.group}
                    id="report-edit-modal-body-input-group"
                    type="text"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Form.Group
                  className="d-flex justify-content-end"
                  controlId="btnsFormFile"
                ></Form.Group>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
});
