import { Form, FormControl, Button } from "react-bootstrap";
import { ChangeEvent, useCallback } from "react";
import { observer } from "mobx-react";
import { header } from "../../BLL/Header";

export const FormHeader = observer(() => {
  const handleTextInputChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      header.setSearchText(e.currentTarget.value);
    },
    []
  );
  const handleSubmit = () => {
    //@ts-ignore
    alert("hello");
  };
  return (
    <Form
      onSubmit={handleSubmit}
      id="form-header"
      className="d-flex justify-content-end w-100"
    >
      <FormControl
        onChange={handleTextInputChange}
        value={header.getSearchText}
        id={"input-search"}
        type="search"
        placeholder="Search"
        className="me-2"
        style={{ width: 200 }}
        aria-label="Search"
      />
      <Button
        id={"btn-search"}
        className={"me-2"}
        variant="outline-light"
        type={"submit"}
      >
        Search
      </Button>
      <Button
        id={"btn-insert"}
        className={"me-2"}
        variant="outline-light"
        type={"button"}
      >
        Insert
      </Button>
    </Form>
  );
});
