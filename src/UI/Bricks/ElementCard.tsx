import { observer } from "mobx-react";
import { ChangeEvent, useCallback } from "react";
import { Button, Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { Element } from "../../types";

export const ElementCard = observer(
  ({ id, image, text, left, top, fontSize }: Element) => {
    const handleClickCard = useCallback(() => {
      constructor.setSelectedElementById(id);
    }, [id]);
    const handleBlur = () => {
      constructor.resetSelectedElement();
      if (text === "" && image === null) {
        constructor.removeElementById(id);
      }
    };
    const handleChangeInput = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        constructor.editElement({
          id,
          image,
          left,
          top,
          fontSize,
          text: e.currentTarget.value,
        });
      },
      [id, image, left, top, fontSize]
    );
    return (
      <div
        onClick={handleClickCard}
        id={`element-card${id}`}
        style={{ padding: 5, left, top, fontSize, position: "absolute" }}
      >
        {image ? (
          <img src={""} />
        ) : constructor.selectedElement?.id === id ? (
          <Form.Group className="d-flex" id={`edit-mode${id}`}>
            <Form.Control
              style={{ width: "auto" }}
              onChange={handleChangeInput}
              value={text}
              autoFocus={true}
              onBlur={handleBlur}
            />
          </Form.Group>
        ) : (
          text
        )}
      </div>
    );
  }
);
