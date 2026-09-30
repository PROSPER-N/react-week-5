import { useState } from 'react'

const ScoreBoard = () => {
    const [score, setScore] = useState(0);


    function addThreeWorng() {
        setScore(score + 1);
        setScore(score + 1);
        setScore(score + 1);
    }

    
    function addThreeRight() {
        setScore((prev) => prev + 1);
        setScore((prev) => prev + 1);
        setScore((prev) => prev + 1);
    }



  return (
    <div>
        <p>Score: {score}</p>
        <button onClick={addThreeWorng}> +3 (wrong way)</button>
        <button onClick={addThreeRight}> +3 (right way)</button>

        <hr />
            <p>New component for Profile form</p>
        <hr />
    </div>
  )
}

export default ScoreBoard