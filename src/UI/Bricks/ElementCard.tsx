import { observer } from "mobx-react";
import { Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { Element } from "../../types";

export const ElementCard = observer(
  ({ id, image, text, left, top, fontSize }: Element) => {
    return (
      <div
        onClick={() =>
          constructor.setSelectedElement({
            id,
            image,
            text,
            left,
            top,
            fontSize,
          })
        }
        id={`element-card${id}`}
        style={{ padding: 5, left, top, position: "absolute" }}
      >
        {image ? (
          <img src={""} />
        ) : constructor.selectedElement?.id === id ? (
          <Form.Control
            onChange={(e) => {
              constructor.editElement({
                id,
                image,
                left,
                top,
                fontSize,
                text: e.currentTarget.value,
              });
            }}
            value={text}
            autoFocus={true}
            onBlur={constructor.resetSelectedElement}
          />
        ) : (
          text
        )}
      </div>
    );
  }
);
