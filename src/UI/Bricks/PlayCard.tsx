import { observer } from "mobx-react";
import { home } from "../../BLL/Home";

type Props = {
  isDraggable: boolean;
  imgSrc: string;
  placeId: number;
};

export const PlayCard = observer(({ placeId, imgSrc, isDraggable }: Props) => {
  const handleDrop = () => {
    if (placeId === 0) {
      home.setPlaceById(placeId);
    }
  };
  return (
    <img
      onDrop={handleDrop}
      draggable={isDraggable}
      src={imgSrc}
      id={`play-card${placeId}`}
      style={{ width: 164, height: 164, border: "3px solid white" }}
    />
  );
});
