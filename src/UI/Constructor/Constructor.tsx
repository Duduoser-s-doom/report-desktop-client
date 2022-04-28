import { Container } from "react-bootstrap";
import { FormHeader } from "./FormHeader";
import { Sandbox } from "./Sandbox";

export const Constructor = () => {
  return <Container className="mt-3">
    <FormHeader />
    <Sandbox />
  </Container>;
};
