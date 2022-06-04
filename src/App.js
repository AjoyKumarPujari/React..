import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0)
  return (
    <div >
      <h1>My Count is { count }</h1>
      <button onClick={()=>setCount(count+1)}> Add Count</button>
    </div>
  );
}
