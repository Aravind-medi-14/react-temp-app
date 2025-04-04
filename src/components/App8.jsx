import React from "react";
import { useState, useEffect } from "react";
export default function App8() {
  const [numbers, setNumbers] = useState([]);
  const [number, setNumber] = useState();
  const [total, setTotal] = useState();
  const handleSubmit = () => {
    setNumbers([...numbers, number]);
  };
  useEffect(() => {
    setTotal(
      numbers.reduce((sum, value) => {
        return sum + Number(value);
      }, 0)
    );
  }, [numbers]);
  return (
    <div>
      <h3>This is App8</h3>
      <p>
        <input
          type="number"
          onChange={(e) => setNumber(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Add</button>
      </p>
      {numbers && numbers.map((value) => <div>{value}</div>)}
      <hr></hr>
      Total:{total}
    </div>
  );
}