import { useState } from 'react'
import Gallery from './components/Gallery'
import Scoreboard from './components/Scoreboard'
import './styles/App.css'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  return (
    <>
      <Scoreboard score={score} bestScore={bestScore} />
      <Gallery
        score={score}
        bestScore={bestScore}
        setScore={setScore}
        setBestScore={setBestScore}
      />
    </>
  )
}

export default App
