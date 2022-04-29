import { observer } from "mobx-react";
import { ChangeEvent, useCallback } from "react";
import { Form } from "react-bootstrap";
import { constructor } from "../../BLL/Constructor";
import { Element } from "../../types";

const delay = (t:number) => new Promise((resolve)=>setTimeout(resolve,t))
export const ElementCard = observer(
  ({ id, imgSrc, text, left, top, fontSize }: Element) => {
    const handleClickCard = useCallback(() => {
      constructor.setSelectedElementById(id);
    }, [id]);
    const handleSubmit = async() => {
      constructor.resetSelectedElement()
      if (text === "" && imgSrc === null) {
        constructor.removeElementById(id);
      }
    };
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
        constructor.setSelectedElementById(id)
      },
      [id, imgSrc, left, top, fontSize]
    );
    return (
      <div
        onClick={handleClickCard}
        id={`element-card${id}`}
        style={{ left, top, fontSize, position: "absolute" }}
      >
        {imgSrc ? (
          <img style={constructor.selectedElement?.id === id ? {borderRadius:10, boxShadow:"0 0 10px #0D6EFD"} : {}} src={imgSrc} />
        ) : constructor.selectedElement?.id === id ? (
          <Form onSubmit={handleSubmit} className="d-flex" id={`edit-mode${id}`}>
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
