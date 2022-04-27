import { memo, useCallback, useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap";

type Props = {
  page: number;
  count: number;
  portionSize: number;
  onChangePage: (page: number) => void;
};
export const Pagination = memo<Props>(
  ({ page, count, portionSize, onChangePage }) => {
    const portionButtons = 5;
    const countButtons = Math.ceil(count / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const handleNextButton = useCallback(() => {
      setPortionNumber((prev) => prev + 1);
    }, []);
    const handlePrevButton = useCallback(() => {
      setPortionNumber((prev) => prev - 1);
    }, []);

    let buttons = [];
    for (
      let i = (portionNumber - 1) * portionButtons + 1;
      i <=
      (portionNumber * portionButtons > countButtons
        ? countButtons
        : portionButtons * portionNumber);
      i++
    ) {
      buttons.push(
        <Button
          variant={i === page ? "success" : "outline-success"}
          onClick={() => onChangePage(i)}
        >
          {i}
        </Button>
      );
    }
    return (
      <div>
        <ButtonGroup>
          {portionNumber > 1 && (
            <Button onClick={handlePrevButton} variant={"success"}>
              {"<"}
            </Button>
          )}
          {buttons}
          {portionNumber * portionButtons < countButtons && (
            <Button onClick={handleNextButton} variant={"success"}>
              {">"}
            </Button>
          )}
        </ButtonGroup>
      </div>
    );
  }
);
