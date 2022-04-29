import { observer } from "mobx-react";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { Element } from "../../types";
import { ElementCard } from "../Bricks";

export const Sandbox = observer(() => {
  const [lastSelectedItem, setLastSelectedItem] = useState<null | Element>(
    null
  );
  useEffect(() => {
    if (
      (constructor.selectedElement === null ||
        lastSelectedItem?.id !== constructor?.selectedElement?.id) &&
      lastSelectedItem?.text === "" &&
      lastSelectedItem?.imgSrc === null
    ) {
      constructor.removeElementById(lastSelectedItem.id);
    }
    setLastSelectedItem(constructor.selectedElement);
  }, [constructor.selectedElement]);

  const doubleClickHandler = (e: React.MouseEvent) => {
    const { offsetX, offsetY } = e.nativeEvent as unknown as {
      offsetX: number;
      offsetY: number;
    };
    const id = new Date().getTime();
    constructor.addElement({
      left: offsetX,
      top: offsetY,
      imgSrc: null,
      text: "New text",
      fontSize: 16,
      id,
    });
  };

  return (
    <Container
      onDoubleClick={doubleClickHandler}
      id="sandbox"
      style={{
        width: 595,
        height: 842,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        position: "relative",
        overflow: "hidden",
      }}
      className="mt-3 mb-3"
    >
      {constructor.elements.map((e) => (
        <ElementCard {...e} />
      ))}
    </Container>
  );
});
