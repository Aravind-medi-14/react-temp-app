import React from 'react'
import { useState,useEffect } from 'react'
import { useRef } from 'react';

export default function App10() {
    const [num,setNum] = useState(0);
    const divRef = useRef();
    const numRef = useRef(0);
    useEffect(() => {
        if(numRef.current > num){
            divRef.current.style.color = "red";
        }
        else{
            divRef.current.style.color = "green";
        }
       numRef.current = num;
    } , [num]);
   

  return (
    <div>
      <div>
        <input type="number"  onChange={(e) => setNum(e.target.value)}/>
      </div>
      <div>
        <p ref={divRef}>{num}</p>
      </div>
    </div>
  )
}
