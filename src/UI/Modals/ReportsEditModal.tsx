import { observer } from "mobx-react";
import { Form, Modal, Button } from "react-bootstrap";
import { Formik } from "formik";
import { modal } from "../../BLL/Modal";
import { reports } from "../../BLL/Reports";
import { ModalRoutes } from "../../consts/modal-routes";
import { ReportChangeModel } from "../../types";

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
        onSubmit={async (values) => {
          let changeModel = Object.keys(values).reduce((acc, tag) => {
            if (values[tag as keyof typeof values]) {
              //@ts-ignore
              acc[tag as keyof ReportChangeModel] =
                values[tag as keyof typeof values];
            }
            return acc;
          }, {} as ReportChangeModel);
          await reports.changeAndSaveReports(changeModel);
          modal.hide()
        }}
        validate={(values) => {}}
        initialValues={{
          group: "",
          labNumber: 0,
          name: "",
          points: 0,
          githubURL: "",
        }}
      >
        {({ values, handleChange, handleSubmit }) => {
          const isDisabled = !Object.values(values).some((v) => !!v) || reports.isFetching;
          return (
            <Form onSubmit={handleSubmit}>
              <Modal.Body id="report-edit-modal-body">
                <Form.Group controlId="formFile" className="mb-3">
                  <Form.Label
                    id="report-edit-modal-body-input-group-label"
                    htmlFor="report-edit-modal-body-input-group"
                  >
                    Group
                  </Form.Label>
                  <Form.Control
                    name="group"
                    onChange={handleChange}
                    value={values.group}
                    id="report-edit-modal-body-input-group"
                    type="text"
                  />
                  <Form.Label
                    id="report-edit-modal-body-input-labNumber-label"
                    htmlFor="report-edit-modal-body-input-labNumber"
                  >
                    Lab number
                  </Form.Label>
                  <Form.Control
                    name="labNumber"
                    onChange={handleChange}
                    value={values.labNumber}
                    id="report-edit-modal-body-input-labNumber"
                    type="number"
                  />
                  <Form.Label
                    id="report-edit-modal-body-input-name-label"
                    htmlFor="report-edit-modal-body-input-name"
                  >
                    Name
                  </Form.Label>
                  <Form.Control
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    id="report-edit-modal-body-input-name"
                    type="text"
                  />
                  <Form.Label
                    id="report-edit-modal-body-input-points-label"
                    htmlFor="report-edit-modal-body-input-points"
                  >
                    Points
                  </Form.Label>
                  <Form.Control
                    name="points"
                    onChange={handleChange}
                    value={values.points}
                    id="report-edit-modal-body-input-points"
                    type="number"
                  />
                  <Form.Label
                    id="report-edit-modal-body-input-githubURL-label"
                    htmlFor="report-edit-modal-body-input-githubURL"
                  >
                    Github URL
                  </Form.Label>
                  <Form.Control
                    name="githubURL"
                    onChange={handleChange}
                    value={values.githubURL}
                    id="report-edit-modal-body-input-githubURL"
                    type="text"
                  />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Form.Group
                  className="d-flex justify-content-end"
                  controlId="btnsFormFile"
                >
                  <Button
                    type="submit"
                    name="saveAndChange"
                    disabled={isDisabled}
                    className="me-2"
                    variant="outline-success"
                    id="report-edit-modal-footer-change-and-save"
                  >
                    Save and Change
                  </Button>
                </Form.Group>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
});
