import { observer } from "mobx-react";
import { Container, Row } from "react-bootstrap";
import { home } from "../../BLL/Home";
import { PlayCard } from "../Bricks";
import { images } from "./images";

export const PlayZone = observer(() => {
  return (
    <Container
      style={{
        width: 501,
        height: 501,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
      }}
      id="play-zone"
      className="mt-3 mb-3"
    >
      {home.board.map((row,rowId)=><Row key={`row${rowId}`}>{row.map(col=><PlayCard key={`card${col}`} placeId={col} imgSrc={images[col]} />)}</Row>)}
    </Container>
  );
})
