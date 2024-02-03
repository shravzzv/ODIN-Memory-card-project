import '../styles/Scoreboard.css'

export default function Scoreboard({ bestScore }) {
  return (
    <aside className='scoreboard'>
      <p>
        Best Score: <span>{bestScore}</span>
      </p>
    </aside>
  )
}
