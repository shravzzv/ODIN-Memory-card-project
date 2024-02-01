import '../styles/Scoreboard.css'

export default function Scoreboard({ score, bestScore }) {
  return (
    <aside className='scoreboard'>
      <p>
        Current Score: <span>{score}</span>
      </p>
      <p>
        Best Score: <span>{bestScore}</span>
      </p>
    </aside>
  )
}
