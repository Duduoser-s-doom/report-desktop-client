import { Navbar } from "react-bootstrap";
import { FormHeader } from "./FormHeader";

export const Header = () => {
  return (
    <Navbar id={"header"} fixed={"top"} variant={"dark"} bg={"success"}>
      <Navbar.Brand className={"mx-2"}>Report Generator 1.0</Navbar.Brand>
      <FormHeader />
    </Navbar>
  );
};
