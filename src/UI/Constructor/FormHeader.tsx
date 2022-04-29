import { observer } from "mobx-react";
import { useMemo } from "react";
import { Button, Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { modal } from "../../BLL/Modal";
import { ModalRoutes } from "../../consts";

export const FormHeader = observer(() => {
  const isDisabled = useMemo(
    () => !constructor.selectedElement,
    [constructor.selectedElement]
  );
  const handleRemoveBtn = () => {
    constructor.removeElementById(constructor.selectedElement?.id ?? 0);
    constructor.resetSelectedElement();
  };
  const handleEditBtn = () => {
    modal.show(ModalRoutes.elementEdit);
  };
  return (
    <Form id="form-header" className="d-flex justify-content-end w-100">
      <Form.Control className="me-2" id="btn-attach" type="file" />
      <Button
        className="me-2"
        disabled={isDisabled}
        onClick={handleEditBtn}
        variant="outline-warning"
        id="btn-edit-card"
      >
        <i className="bi bi-pencil" />
      </Button>
      <Button
        className="me-2"
        disabled={isDisabled}
        onClick={handleRemoveBtn}
        variant="outline-danger"
        id="btn-remove-card"
      >
        <i className="bi bi-trash" />
      </Button>
    </Form>
  );
});
