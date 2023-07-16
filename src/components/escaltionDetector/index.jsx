import { nanoid } from "nanoid";
import { useState } from "react";
import Row from "./Row";
import {
  ClearButton,
  EscalationDetectorWrapper,
  Input,
  Title,
} from "./index.style";

function EscalationDetector() {
  const [amountRows, setAmountRows] = useState([]);
  const [initialInput, setInitialInput] = useState("");

  const handleInitialChange = (event) => {
    if (amountRows.length === 0) {
      setAmountRows([
        {
          id: nanoid(),
          inputAmount: "",
          percentEscalation: "",
          amountEscalation: "",
        },
      ]);
    }

    if (event.target.value === "") {
      setAmountRows([]);
    }
    setInitialInput(event.target.value);
  };

  const handleChange = (id, event) => {
    const { value } = event.target;

    const newRows = amountRows.map((row, index) => {
      if (row.id !== id) return row;

      row.percentEscalation = row;

      return {
        ...row,
        inputAmount: value,
      };
    });
    setAmountRows(newRows);
  };

  // {
  //     id:
  //     inputAmount:
  //     percentEscalation:
  //     amountEscalation:
  // }

  const removeRow = (rowId) => {
    setAmountRows((prevAmountRows) =>
      prevAmountRows.filter((row) => row.id !== rowId),
    );
  };

  const rows = amountRows.map((row) => {
    return (
      <Row
        key={row.id}
        rowInfo={row}
        handleChange={handleChange}
        removeRow={removeRow}
      />
    );
  });

  return (
    <>
      <EscalationDetectorWrapper>
        <Title>Escalation Detector</Title>
        <Input type="number" onChange={(event) => handleInitialChange(event)} />
        <ClearButton>Clear</ClearButton>
        {amountRows.length > 0 && rows}
      </EscalationDetectorWrapper>
    </>
  );
}

export default EscalationDetector;
