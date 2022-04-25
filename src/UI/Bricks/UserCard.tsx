import { observer } from "mobx-react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { Report } from "../../types";

export const UserCard = observer((props: Report) => {
  return (
    <Card id={`card-user${props.reportId}`}>
      <Card.Body id={`card-body${props.reportId}`}>
        <Row id={`card-grid${props.reportId}`}>
          <Col id={`card-group${props.reportId}`} xs={2}>
            {props.group}
          </Col>
          <Col id={`card-name${props.reportId}`} xs={5}>
            {props.name}
          </Col>
          <Col id={`card-labNumber${props.reportId}`} xs={1}>
            {props.labNumber}
          </Col>
          <Col className="d-flex justify-content-end" id={`card-buttons${props.reportId}`} xs={4}>
            <Button
              id={`card-btn-delete${props.reportId}`}
              variant="outline-danger"
            >
              <i className="bi bi-trash"></i>
            </Button>
            <Button
              id={`card-btn-download${props.reportId}`}
              variant="outline-success"
            >
              <i className="bi bi-download"></i>
            </Button>
            <Button
              id={`card-btn-change${props.reportId}`}
              variant="outline-warning"
            >
              <i className="bi bi-pencil"></i>
            </Button>
            <Form.Check className="mt-1 mx-1"
            id={`card-checkbox${props.reportId}`} type="checkbox"/>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
});
