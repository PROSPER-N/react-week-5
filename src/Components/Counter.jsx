import React from 'react'
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);


  return (
    <div>
        <p>you clicked {count} times.</p>

        <button style={{backgroundColor: "white", color: "black", fontSize: 20, fontWeight: 700, borderRadius: 8, border: "none"}} onClick={() => setCount(count + 1)}> Click to add </button>
        <button style={{backgroundColor: "red", color: "white", fontSize: 20, fontWeight: 700, borderRadius: 8, border: "none"}} onClick={() => setCount(0)}> Click to reset </button>
        <hr />
        <p>New component for the Boolean</p>
        <hr />
    </div>
  )
}

export default Counter