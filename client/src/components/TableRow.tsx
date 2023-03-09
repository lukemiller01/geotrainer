// React
import { useState } from "react";

// Bootstrap
import Image from "react-bootstrap/Image";

interface Row {
  answer: number,
  correct: number,
  flag: string,
  index: number
}

const TableRow = ({ answer, correct, flag, index }: Row) => {
  const [column, setColumn] = useState(answer === correct); // If the answer is correct
  const col = answer === correct ? 2 : 1; // If the answer is correct, display the answer as 1 column
  const hidden = column ? "none" : "table-cell"; // Hide the "correct" column if the answer is correct
  const colorRed = column ? "green" : "red"; // Correct: green; incorrect: red
  const colorGreen = column ? "" : "green"; // Not necessary (because hidden) ; correct: green

  return (
    <tr style={{ verticalAlign: "middle", fontWeight: "bold" }}>
      <td>{index}</td>
      <td>
        <Image src={flag} className="table__image"></Image>
      </td>
      <td colSpan={col} style={{ color: colorRed }}>
        {answer}
      </td>
      <td style={{ display: hidden, color: colorGreen }}>{correct}</td>
    </tr>
  );
};

export default TableRow;
