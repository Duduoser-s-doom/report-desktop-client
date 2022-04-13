import { observer } from "mobx-react";
import { Form, Modal } from "react-bootstrap";
import { modal } from "../../BLL/Modal";
import { ModalRoutes } from "../../consts/modal-routes";

export const ReportsInsertModal = observer(() => {
  return (
    <Modal
      onHide={modal.hide}
      show={modal.visible === ModalRoutes.reportsInsert}
    >
      <Modal.Header id="report-insert-modal-header" closeButton>
        <Modal.Title>Insert reports</Modal.Title>
      </Modal.Header>
      <Modal.Body id="report-insert-modal-body">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label id="report-insert-modal-body-input-group-label">
            Group
          </Form.Label>
          <Form.Control id="report-insert-modal-body-input-group" type="text" />
          <Form.Label id="report-insert-modal-body-input-files-label">
            Here should be excel file
          </Form.Label>
          <Form.Control id="report-insert-modal-body-input-files" type="file" />
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
});
