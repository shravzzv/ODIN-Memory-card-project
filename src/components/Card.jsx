import '../styles/Card.css'

export default function Card({ id, url, handleClick, flipCards }) {
  return (
    <div className='scene'>
      <div className={`card ${flipCards ? 'is-flipped' : ''}`}>
        <div
          className='card__face card__face--front'
          style={{
            backgroundImage: `url(${url})`,
          }}
          data-id={id}
          onClick={handleClick}
        ></div>
        <div className='card__face card__face--back'></div>
      </div>
    </div>
  )
}
