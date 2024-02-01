import { useEffect, useState } from 'react'
import '../styles/Gallery.css'
import Card from './Card'
import fisherYatesShuffle from '../utils/fisherYatesShuffle'

export default function Gallery({ score, bestScore, setScore, setBestScore }) {
  const [images, setImages] = useState([])
  const [clicked, setClicked] = useState([])

  const handleClick = (e) => {
    const cardId = e.target.id

    if (!clicked.includes(cardId)) {
      setScore((prevScore) => prevScore + 1)
      setClicked((prevData) => [...prevData, cardId])
    } else {
      setScore(0)
      score > bestScore && setBestScore(score)
      setClicked([])
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
