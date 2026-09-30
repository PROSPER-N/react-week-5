import React from 'react'
import Counter from './Components/Counter'
import PasswordField from './Components/PasswordField'
import ScoreBoard from './Components/ScoreBoard'
import ProfileForm from './Components/ProfileForm'

const App = () => {
  return (
    <div>
      <Counter />
      <PasswordField />
      <ScoreBoard />
      <ProfileForm />
    </div>
  )
}

export default App