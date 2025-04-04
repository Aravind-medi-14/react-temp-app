import React from "react";
import { useNavigate } from "react-router-dom";

export default function App11() {
  const navigate = useNavigate();
  const GotoApp5 = () => {
    navigate("/App5");
  };
  return (
    <div>
      <h3>this is App11</h3>
      <button onClick={GotoApp5}>Goto App5</button>
    </div>
  );
}
