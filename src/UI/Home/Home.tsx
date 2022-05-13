import { memo } from "react";
import { Container } from "react-bootstrap";
import { FormHeader } from "./FormHeader";
import { PlayZone } from "./PlayZone";

export const Home = memo(() => {
  return (
    <Container className="mt-3">
      <FormHeader />
      <PlayZone />
    </Container>
  );
});
