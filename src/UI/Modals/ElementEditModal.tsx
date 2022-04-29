import { Formik } from "formik";
import { observer } from "mobx-react";
import { Form, Modal, Button } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { modal } from "../../BLL/Modal";
import { Element } from "../../types";
import { ModalRoutes } from "../../consts";
import { ChangeEvent } from "react";

export const ElementEditModal = observer(() => {
  return (
    <Modal
      id="element-edit"
      onHide={modal.hide}
      show={modal.visible === ModalRoutes.elementEdit}
    >
      <Modal.Header id="element-edit-modal-header" closeButton>
        Edit element
      </Modal.Header>
      <Formik
        initialValues={constructor.selectedElement as Element}
        onSubmit={(values) => {
          constructor.editElement(values);
        }}
      >
        {({ handleSubmit, handleChange, values, setFieldValue }) => {
          return (
            <Form onSubmit={handleSubmit}>
              <Modal.Body id="element-edit-modal-body">
                <Form.Label
                  id="element-edit-label-x"
                  htmlFor="element-edit-input-x"
                >
                  Coordinate X
                </Form.Label>
                <Form.Control
                  value={values.left}
                  onChange={handleChange}
                  name="left"
                  id="element-edit-input-x"
                />
                <Form.Label
                  id="element-edit-label-y"
                  htmlFor="element-edit-input-y"
                >
                  Coordinate Y
                </Form.Label>
                <Form.Control
                  value={values.top}
                  onChange={handleChange}
                  name="top"
                  id="element-edit-input-y"
                />
                <Form.Label
                  id="element-edit-label-font-size"
                  htmlFor="element-edit-input-font-size"
                >
                  Font size
                </Form.Label>
                <Form.Control
                  value={values.fontSize}
                  onChange={handleChange}
                  type="number"
                  name="fontSize"
                  id="element-edit-input-font-size"
                />
                <Form.Label
                  id="element-edit-label-image"
                  htmlFor="element-edit-input-image"
                >
                  Image in format png
                </Form.Label>
                <Form.Control
                  value={"hmm"}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    //@ts-ignore
                    setFieldValue("image", e?.currentTarget?.files[0] ?? null);
                  }}
                  type="file"
                  name="image"
                  id="element-edit-input-image"
                />
              </Modal.Body>
              <Modal.Footer id="element-edit-modal-footer">
                <Button
                  variant="outline-success"
                  id="element-edit-btn-save"
                  type="submit"
                >
                  Save
                </Button>
              </Modal.Footer>
            </Form>
          );
        }}
      </Formik>
    </Modal>
  );
});
