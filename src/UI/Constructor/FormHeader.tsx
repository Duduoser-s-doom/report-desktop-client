import { observer } from "mobx-react";
import { useMemo, ChangeEvent, useCallback, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { modal } from "../../BLL/Modal";
import { ModalRoutes } from "../../consts";

export const FormHeader = observer(() => {
  const isDisabled = useMemo(
    () => !constructor.selectedElement,
    [constructor.selectedElement]
  );
  const [isLoading, setLoading] = useState(false);
  const handleImageInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files && e.target.files[0]) {
      setLoading(true);
      const fileReader = new FileReader();
      fileReader.onload = () => {
        if (fileReader.readyState === 2) {
          constructor.addElement({
            text: "",
            imgSrc: fileReader.result as string,
            left: 0,
            top: 0,
            fontSize: 16,
            id: new Date().getTime(),
          });
          setLoading(false);
        }
      };
      fileReader.readAsDataURL(e.target.files[0]);
    }
  }, []);
  const handleRemoveBtn = () => {
    constructor.removeElementById(constructor.selectedElement?.id ?? 0);
    constructor.resetSelectedElement();
  };
  const handleEditBtn = () => {
    modal.show(ModalRoutes.elementEdit);
  };
  const handleSaveBtn = () => {
    constructor.saveElements()
  }
  return (
    <Form id="form-header" className="d-flex justify-content-end w-100">
      <Form.Control
        disabled={isLoading}
        accept="image/png"
        onChange={handleImageInput}
        className="me-2"
        id="btn-attach"
        type="file"
      />
      <Button 
      onClick={handleSaveBtn}
      variant="outline-success"
      id="btn-save"
      className="me-2">
        Save
      </Button>
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
