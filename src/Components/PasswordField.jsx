import React from 'react'
import { useState } from 'react';


const PasswordField = () => {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <div>
        <input type={showPassword ? "text" : "password"} placeholder='Password' />

        <button onClick={() => setShowPassword((prev) => !prev)}>
            {showPassword ? "Hide" : "Show"}   
        </button>

        <hr />
            <p>New component for ScoreBoard</p>
        <hr />
    </div>
  )
}

export default PasswordField