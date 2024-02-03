import { useState, useEffect } from 'react'
import '../styles/Help.css'

export default function Help() {
  const [showInstructions, setShowInstructions] = useState(false)

  const handleClick = (e) => {
    e.stopPropagation()
    setShowInstructions((prev) => !prev)
  }

  const handleOutsideClick = (e) => {
    const instructionsElement = document.querySelector('.instructions')
    if (instructionsElement && !instructionsElement.contains(e.target)) {
      setShowInstructions(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)
    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className='help'>
      {showInstructions && (
        <div className='instructions'>
          <p>Win the game by clicking each card only once.</p>
          <p>Click the logo to go back to home.</p>
        </div>
      )}
      <button onClick={handleClick}>?</button>
    </div>
  )
}
