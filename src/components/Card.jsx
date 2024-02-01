/* eslint-disable react/prop-types */
import '../styles/Card.css'

export default function Card({ url }) {
  return (
    <div
      className='card'
      style={{
        backgroundImage: `url(${url})`,
      }}
    ></div>
  )
}
