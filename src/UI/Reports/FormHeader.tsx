import { Form, FormControl, Button } from "react-bootstrap";
import { ChangeEvent, useCallback } from "react";
import { observer } from "mobx-react";
import { reports } from "../../BLL/Reports";
import { modal } from "../../BLL/Modal";
import { ModalRoutes } from "../../consts/modal-routes";

export const FormHeader = observer(() => {
  const handleTextInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      reports.setSearchText(e.currentTarget.value);
    },
    []
  );
  const handleSubmit = useCallback(() => {}, []);
  const handleInsertButton = useCallback(() => {
    modal.show(ModalRoutes.reportsInsert);
  }, []);
  const handleEditButton = useCallback(() => {
    modal.show(ModalRoutes.reportsEdit);
  }, []);
  return (
    <Form
      onSubmit={handleSubmit}
      id="form-reports"
      className="d-flex justify-content-end w-100"
    >
      <FormControl
        onChange={handleTextInputChange}
        value={reports.searchText}
        id="input-search"
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
      />
      <Button
        id="btn-search"
        className="me-2"
        variant="outline-success"
        type="submit"
      >
        Search
      </Button>
      <Button
        id="btn-insert"
        className="me-2"
        variant="outline-success"
        type="button"
        onClick={handleInsertButton}
      >
        Insert
      </Button>
      <Button
        disabled={!(reports.reports.selected.length > 0)}
        id="btn-edit"
        variant="outline-warning"
        onClick={handleEditButton}
      >
        <i className="bi bi-pencil"></i>
      </Button>
    </Form>
  );
});
