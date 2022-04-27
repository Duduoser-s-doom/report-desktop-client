import { Container } from "react-bootstrap";
import { FormHeader } from "./FormHeader";
import { UserCards } from "./UserCards";

export const Reports = () => {
  return (
    <Container id="reports" className="mt-3">
      <FormHeader />
      <UserCards />
    </Container>
  );
};
