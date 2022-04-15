import { observer } from "mobx-react";
import { ChangeEvent } from "react";
import { Form, Modal } from "react-bootstrap";
import { read } from "xlsx";
import { modal } from "../../BLL/Modal";
import { reports } from "../../BLL/Reports";
import { ModalRoutes } from "../../consts/modal-routes";

export const ReportsInsertModal = observer(() => {
  const handleChangeFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target && e.target.files) {
        await tryHandleChangeFileInput(e);
      }
    } catch (e) {}
  };
  const tryHandleChangeFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    const file = e.target.files[0] as File;
    const data = await file.arrayBuffer();
    const workbook = read(data);
    reports.setReportsExcel(file);
  };

  return (
    <Modal
      id="reports-insert"
      onHide={modal.hide}
      show={modal.visible === ModalRoutes.reportsInsert}
    >
      <Modal.Header id="report-insert-modal-header" closeButton>
        <Modal.Title>Insert reports</Modal.Title>
      </Modal.Header>
      <Modal.Body id="report-insert-modal-body">
        <Form.Group controlId="formFile" className="mb-3">
          <Form.Label
            id="report-insert-modal-body-input-group-label"
            htmlFor="report-insert-modal-body-input-group"
          >
            Group
          </Form.Label>
          <Form.Control id="report-insert-modal-body-input-group" type="text" />
          <Form.Label
            id="report-insert-modal-body-input-files"
            htmlFor="report-insert-modal-body-input-files"
          >
            Here should be excel file
          </Form.Label>
          <Form.Control
            onChange={handleChangeFileInput}
            id="report-insert-modal-body-input-files"
            type="file"
          />
        </Form.Group>
      </Modal.Body>
    </Modal>
  );
});
