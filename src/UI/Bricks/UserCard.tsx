import { observer } from "mobx-react";
import { ChangeEvent } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { reports } from "../../BLL/Reports";
import { Report } from "../../types";

export const UserCard = observer((props: Report) => {
  const handleCheckbox = (e:ChangeEvent<HTMLInputElement>) =>{
    if(e.currentTarget.checked){
      reports.setSelectedReports([...reports.reports.selected, props])
    }else{
      reports.setSelectedReports(reports.reports.selected.filter(s=>s.reportId!==props.reportId))
    }
  }
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
          <Col id={`card-points${props.reportId}`} xs={1}>
            {props.points}
          </Col>
          <Col className="d-flex justify-content-end" id={`card-buttons${props.reportId}`} xs={3}>
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
            <Form.Check
            type="checkbox"
            checked={reports.reports.selected.some(s=>s.reportId===props.reportId)}
            onChange={handleCheckbox}
            className="mt-1 mx-1"
            id={`card-checkbox${props.reportId}`}/>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
});
