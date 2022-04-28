import { Button, Form } from "react-bootstrap";

export const FormHeader = () => {
  return (
    <Form id="form-header" className="d-flex justify-content-end w-100">
      <Form.Control id="btn-attach" type="file" />
    </Form>
  );
};
