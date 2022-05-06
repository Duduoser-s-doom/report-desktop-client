import { observer } from "mobx-react";
import { ChangeEvent, useMemo } from "react";
import { Form, Modal, Button } from "react-bootstrap";
import { modal } from "../../BLL/Modal";
import { reports } from "../../BLL/Reports";
import { ModalRoutes } from "../../consts/modal-routes";
import {saveAs} from "file-saver"
import { constructor } from "../../BLL/Constructor";

export const ReportsInsertModal = observer(() => {
  console.log(reports.reports.pdf);
  
  const handleChangeFileInput = async (e: ChangeEvent<HTMLInputElement>) => {
    try {
      if (e.target && e.target.files) {
        tryHandleChangeFileInput(e);
      }
    } catch (e) {}
  };
  const handleToPDFButton = () =>{
    reports.generatePDFAndZipFiles(constructor.elements)
  }
  const handleDownloadButton = () =>{
    saveAs(reports.reports.zip,"Reports.zip")
  }
  const handleSaveButton = () =>{
    reports.saveReportsInServer()
  }
  const tryHandleChangeFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    //@ts-ignore
    reports.setReportsByExcelFile(e.target.files[0]);
  };
  const handleChangeGroupInput = (e: ChangeEvent<HTMLInputElement>) => {
    reports.setGroup(e.target.value);
  };
  const isToPDFBtnDisabled = useMemo(
    () => !(reports.reports.raw.length>0 && !reports.isFetching && reports.group),
    [reports.isFetching, reports.group, reports.reports.raw]
  );
  const isDownloadBtnDisabled = useMemo(
    () => !(reports.reports.zip && !reports.isFetching),
    [reports.reports.zip, reports.isFetching]
  );
  const isSaveBtnDisabled = useMemo(
    () => !(reports.reports.pdf.length>0 && reports.reports.raw.length>0 && !reports.isFetching),
    [reports.reports.pdf, reports.reports.raw, reports.isFetching]
  );

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
          <Form.Control
            onChange={handleChangeGroupInput}
            value={reports.group}
            id="report-insert-modal-body-input-group"
            type="text"
          />
          <Form.Label
            id="report-insert-modal-body-input-files-label"
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
      <Modal.Footer>
        <Form.Group
          className="d-flex justify-content-end"
          controlId="btnsFormFile"
        >
          <Button
            onClick={handleToPDFButton}
            disabled={isToPDFBtnDisabled}
            variant="outline-warning"
            id="report-insert-modal-footer-btn-to-pdf"
            className="me-2"
          >
            To PDF
          </Button>
          <Button
            onClick={handleDownloadButton}
            disabled={isDownloadBtnDisabled}
            variant="outline-success"
            id="report-insert-modal-footer-btn-download"
            className="me-2"
          >
            Download
          </Button>
          <Button
            onClick={handleSaveButton}
            disabled={isSaveBtnDisabled}
            variant="outline-success"
            id="report-insert-modal-footer-btn-save"
            className="me-2"
          >
            Save
          </Button>
        </Form.Group>
      </Modal.Footer>
    </Modal>
  );
});
