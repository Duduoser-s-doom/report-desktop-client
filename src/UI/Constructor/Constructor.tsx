import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { FormHeader } from "./FormHeader";
import { Sandbox } from "./Sandbox";

export const Constructor = () => {
  useEffect(() => {
    constructor.fetchElements();
  }, []);
  return (
    <Container className="mt-3">
      <FormHeader />
      <Sandbox />
    </Container>
  );
};
