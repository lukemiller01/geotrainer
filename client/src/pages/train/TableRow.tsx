// React
import { useState } from 'react'

// Bootstrap
import Image from 'react-bootstrap/Image'

// TODO: remove "any" from component props
const TableRow = ({answer, correct, flag, index}:any) => {

  const [column, setColumn] = useState(answer === correct);
  const col = column ? 2 : 1;
  const hidden = column ? 'none' : 'table-cell';
  const colorRed = column? 'green' : 'red';
  const colorGreen = column? '' : 'green';

  return (
    <tr style={{verticalAlign: 'middle', fontWeight: 'bold'}}>
        <td>{index}</td>
        <td><Image src={flag}></Image></td>
        <td colSpan={col} style={{color: colorRed}}>{answer}</td>
        <td style={{display: hidden, color: colorGreen}}>{correct}</td>
    </tr>
  )
}

export default TableRow