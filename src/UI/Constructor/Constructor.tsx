import { memo } from "react";
import { Container } from "react-bootstrap";
import { FormHeader } from "./FormHeader";
import { Sandbox } from "./Sandbox";

export const Constructor = memo(() => {
  return (
    <Container className="mt-3">
      <FormHeader />
      <Sandbox />
    </Container>
  );
});
