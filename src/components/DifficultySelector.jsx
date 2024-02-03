import '../styles/DifficultySelector.css'

export default function DifficultySelector({ onSelect, setShowHome }) {
  const handleClick = (e) => {
    onSelect(e.target.textContent.toLowerCase())
    setShowHome(false)
  }

  return (
    <div className='diffSelector'>
      <p>Select a difficulty level</p>
      <div className='levels'>
        <button onClick={handleClick}>Easy</button>
        <button onClick={handleClick}>Medium</button>
        <button onClick={handleClick}>Difficult</button>
      </div>
    </div>
  )
}
