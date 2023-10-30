// import { useState } from "react";

// interface SquareProps {
//   value: string;
// }

function Square({ value, onSquareClick }) {
  //     const [value, setValue] = useState(null);

  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
