import { observer } from "mobx-react";
import { Container } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { ElementCard } from "../Bricks";

export const Sandbox = observer(() => {
  console.log(constructor.elements);
  
  return (
    <Container
      onDoubleClick={(e) => {
        constructor.addElement({
          left: e.nativeEvent.offsetX,
          top: e.nativeEvent.offsetY,
          image: null,
          text: "First text!!!",
          fontSize: 16,
          id: new Date().getTime(),
        });
      }}
      id="sandbox"
      style={{
        width: 595,
        height: 842,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        position: "relative"
      }}
      className="mt-3 mb-3"
    >
      {constructor.elements.map((e) => (
        <ElementCard {...e} />
      ))}
    </Container>
  );
});
