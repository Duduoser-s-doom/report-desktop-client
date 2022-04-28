import { Container } from "react-bootstrap";

export const Sandbox = () => {
  return (
    <Container
      id="sandbox"
      style={{
        width: 595,
        height: 842,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
      className="mt-3 mb-3"
    ></Container>
  );
};
