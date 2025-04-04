import React from "react";
import { useState, useEffect } from "react";
export default function App7() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [result, setResult] = useState(0);
  
  useEffect(() => {
    setResult(Number(a)+Number(b));
  }, [a]);

  useEffect(() => {
    setResult(Number(a)*Number(b));
  }, [b]);

  return (
    <div>
      <h3>This is App7</h3>
      <p>
        <input type="number" onChange={(e) => setA(e.target.value)} />
      </p>
      <p>
        <input type="number" onChange={(e) => setB(e.target.value)} />
      </p>
      
      <p>{result}</p>
    </div>
  );
}
