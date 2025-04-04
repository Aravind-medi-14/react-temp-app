import React from "react";
import { useState,useRef } from "react";

export default function App9() {
    const [color,setColor] = useState();
    const txtRef = useRef();
    const handleSubmit = () => {
        txtRef.current.style.color = color;
    }
  return (
    <div>
      <div className="Container">
        <div className="Row">
          <input type="text" placeholder="Enter color" onChange={(e) => setColor(e.target.value)}/>
          <button onClick={handleSubmit} className="btn btn-dark m-3">Submit</button>
        </div>
        <div className="Row2">
            <h2 ref={txtRef}>Hello World!!</h2>
        </div>
      </div>
    </div>
  );
}
