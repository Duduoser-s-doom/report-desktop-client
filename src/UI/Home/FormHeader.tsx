import { observer } from "mobx-react";
import { Button, Form } from "react-bootstrap";
import { home } from "../../BLL/Home";

export const FormHeader = observer(() => {
  return (
    <Form id="home-form-header" className="d-flex justify-content-end w-100">
      <Button onClick={home.refresh} id="btn-refresh" variant="outline-warning">
        Refresh <i className="bi bi-arrow-clockwise"></i>
      </Button>
    </Form>
  );
});
