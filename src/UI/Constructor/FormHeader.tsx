import { observer } from "mobx-react";
import { Button, Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { modal } from "../../BLL/Modal";
import { ModalRoutes } from "../../consts";

export const FormHeader = observer(() => {
  const isDisabled = !!constructor.selectedElement;
  const handleRemoveBtn = () => {
    constructor.removeElementById(constructor.selectedElement?.id ?? 0);
  };
  const handleEditBtn = () => {
    modal.show(ModalRoutes.elementEdit);
  };
  return (
    <Form id="form-header" className="d-flex justify-content-end w-100">
      <Form.Control id="btn-attach" type="file" />
      <Button
        disabled={isDisabled}
        onClick={handleEditBtn}
        variant="outline-warning"
        id={`btn-edit-card`}
      >
        <i className="bi bi-pencil" />
      </Button>
      <Button
        disabled={isDisabled}
        onClick={handleRemoveBtn}
        variant="outline-danger"
        id={`btn-remove-card`}
      >
        <i className="bi bi-trash" />
      </Button>
    </Form>
  );
});
