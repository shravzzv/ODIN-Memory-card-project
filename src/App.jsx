import { useState } from 'react'
import Gallery from './components/Gallery'
import Scoreboard from './components/Scoreboard'
import './styles/App.css'
import DifficultySelector from './components/DifficultySelector'
import Logo from './components/Logo'
import Help from './components/Help'

function App() {
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  const [difficulty, setDifficulty] = useState('')
  const [showHome, setShowHome] = useState(true)

  const navigateHome = () => {
    setShowHome(true)
    setScore(0)
    setBestScore(0)
    setDifficulty('')
  }

  return (
    <>
      <Logo showHome={showHome} navigateHome={navigateHome} />

      {showHome ? (
        <>
          <DifficultySelector
            onSelect={setDifficulty}
            setShowHome={setShowHome}
          />
        </>
      ) : (
        <>
          <Scoreboard bestScore={bestScore} />

          <Gallery
            score={score}
            setScore={setScore}
            setBestScore={setBestScore}
            difficulty={difficulty}
          />
        </>
      )}

      <Help />
    </>
  )
}

export default App
