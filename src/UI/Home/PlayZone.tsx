import { Container } from "react-bootstrap";

export const PlayZone = () => {
  return (
    <Container
      style={{
        width: 501,
        height: 501,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
      }}
      id="play-zone"
      className="mt-3 mb-3"
    ></Container>
  );
};
