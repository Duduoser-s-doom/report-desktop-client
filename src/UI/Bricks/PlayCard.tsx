import { observer } from "mobx-react";
import { home } from "../../BLL/Home";

type Props = {
  imgSrc: string;
  placeId: number;
};

export const PlayCard = observer(({ placeId, imgSrc }: Props) => {
  const handleClick = () => {
    if (placeId === 0) {
      home.setPlaceById(placeId);
    }  
  };
  return (
    <img
      onClick={handleClick}
      src={imgSrc}
      id={`play-card${placeId}`}
      style={{ width: 164, height: 164, border: "3px solid white" }}
    />
  );
});
