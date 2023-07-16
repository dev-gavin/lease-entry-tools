import { RowContainer } from "./Row.style";
import { Input } from "./index.style";

function Row({ handleChange, rowInfo, removeRow }) {
  return (
    <>
      <RowContainer>
        <button
          onClick={() => removeRow(rowInfo.id)}
          className="subtract_button"
        >
          -
        </button>
        <button className="add_button">+</button>
        <Input
          type="number"
          onChange={(event) => handleChange(rowInfo.id, event)}
          value={rowInfo.inputAmount}
        />
        <p className="percentage_escalation">test</p>
        <p className="amount_escalation">test</p>
      </RowContainer>
    </>
  );
}

export default Row;
