import { Container } from "react-bootstrap";
import { report } from "../../test-data/report";
import { UserCard } from "../Bricks";
import { FormHeader } from "./FormHeader";

export const Reports = () => {
  return (
    <Container id="reports" className="mt-3">
      <FormHeader />
      <UserCard {...report} />
    </Container>
  );
};
