import { observer } from "mobx-react";
import {
  ChangeEvent,
  DetailedHTMLProps,
  DragEvent,
  HTMLAttributes,
  useCallback,
  useState,
} from "react";
import { Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { Element } from "../../types";

export const ElementCard = observer(
  ({ id, imgSrc, text, left, top, fontSize }: Element) => {
    const handleClickCard = useCallback(() => {
      constructor.setSelectedElementById(id);
    }, [id]);
    const handleSubmit = useCallback(() => {
      constructor.resetSelectedElement();
      if (text === "" && imgSrc === null) {
        constructor.removeElementById(id);
      }
    }, [id, imgSrc, text]);
    const handleChangeInput = useCallback(
      (e: ChangeEvent<HTMLInputElement>) => {
        constructor.editElement({
          id,
          imgSrc,
          left,
          top,
          fontSize,
          text: e.currentTarget.value,
        });
        constructor.setSelectedElementById(id);
      },
      [id, imgSrc, left, top, fontSize]
    );
    const [isDragged, setDragged] = useState(false);
    const handleDragStart = (e: DragEvent<HTMLInputElement>) => {
      console.log(e);
      setDragged(true);
    };
    const handleDragEnd = (e: DragEvent<HTMLInputElement>) => {
      setDragged(false);
      constructor.editElement({
        id,
        imgSrc,
        text,
        //@ts-ignore
        left: e.pageX - e.currentTarget.offsetParent.offsetLeft,
        //@ts-ignore
        top: e.pageY - e.currentTarget.offsetParent.offsetTop,
        fontSize,
      });
      console.log(e);
    };

    return (
      <div
        draggable={true}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onClick={handleClickCard}
        id={`element-card${id}`}
        style={{ left, boxShadow:isDragged ? "0 0 10px #0D6EFD" : "" , borderRadius: 5,top, fontSize, position: "absolute" }}
      >
        {imgSrc ? (
          <img
            style={
              constructor.selectedElement?.id === id
                ? { borderRadius: 10, boxShadow: "0 0 10px #0D6EFD" }
                : {}
            }
            src={imgSrc}
          />
        ) : constructor.selectedElement?.id === id ? (
          <Form
            onSubmit={handleSubmit}
            className="d-flex"
            id={`edit-mode${id}`}
          >
            <Form.Control
              style={{ width: "auto" }}
              onChange={handleChangeInput}
              value={text}
              autoFocus={true}
            />
          </Form>
        ) : (
          text
        )}
      </div>
    );
  }
);
