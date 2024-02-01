import '../styles/Card.css'

export default function Card({ id, url, handleClick }) {
  return (
    <div
      id={id}
      className='card'
      style={{
        backgroundImage: `url(${url})`,
      }}
      onClick={handleClick}
    ></div>
  )
}
