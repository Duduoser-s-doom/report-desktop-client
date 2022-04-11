import { observer } from "mobx-react";
import { memo } from "react";
import { Navbar, Nav } from "react-bootstrap";

export const Header = observer(
  memo(() => {
    const handleTextInputChange = (e: HTMLInputElement) =>{

    }
    return (
      <Navbar id={"header"} variant={"dark"} bg={"primary"}>
        <Nav>
          <input id={"search"} />
        </Nav>
      </Navbar>
    );
  })
);
