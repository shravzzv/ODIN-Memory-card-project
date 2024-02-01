import { useEffect, useState } from 'react'
import '../styles/Gallery.css'
import Card from './Card'
import fisherYatesShuffle from '../utils/fisherYatesShuffle'

export default function Gallery({ score, bestScore, setScore, setBestScore }) {
  const [images, setImages] = useState([])
  const [clickedIds, setClickedIds] = useState([])

  const handleClick = (e) => {
    const cardId = e.target.id

    if (!clickedIds.includes(cardId)) {
      setScore((prevScore) => prevScore + 1)
      setClickedIds((prevData) => [...prevData, cardId])
    } else {
      setScore(0)
      score > bestScore && setBestScore(score)
      setClickedIds([])
    }

    setImages((prevImages) => fisherYatesShuffle(prevImages))
  }

  useEffect(() => {
    // todo: replace local data with an API
    setTimeout(() => {
      fetch('/images.json')
        .then((res) => res.json())
        .then((data) => setImages(data))
      // to emulate network fetching
    }, 1000)

    return () => {}
  }, [])

  return (
    <div className='gallery'>
      {images.length > 0 ? (
        images.map((image) => (
          <Card
            key={image.id}
            id={image.id}
            url={image.url}
            handleClick={handleClick}
          />
        ))
      ) : (
        <p>Loading....</p>
      )}
    </div>
  )
}
