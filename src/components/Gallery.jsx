import { useEffect, useState } from 'react'
import Card from './Card'
import '../styles/Gallery.css'
import ResultDialog from './ResultDialog'
import fisherYatesShuffle from '../utils/fisherYatesShuffle'
import Spinner from './Spinner'
import Spinner from './Spinner'

export default function Gallery({ score, setScore, setBestScore, difficulty }) {
  const [images, setImages] = useState([])
  const [clickedIds, setClickedIds] = useState([])
  const [showDialog, setShowDialog] = useState(false)
  const [flipCards, setFlipCards] = useState(false)
  const goal = images.length

  const handleClick = (e) => {
    const cardId = e.target.dataset.id

    if (!clickedIds.includes(cardId)) {
      setScore((prevScore) => prevScore + 1)
      setClickedIds((prevData) => [...prevData, cardId])
      if (goal - score > 1) {
        // prevent shuffle and flip if won
        setFlipCards(true)
        setTimeout(() => {
          setImages((prevImages) => fisherYatesShuffle(prevImages))
        }, 1000)
        setTimeout(() => {
          setFlipCards(false)
        }, 2000)
      }
    } else {
      setShowDialog(true)
    }
  }

  const handleRestart = () => {
    setScore(0)
    setBestScore((prevScore) => {
      if (score == goal) return 0
      if (score > prevScore) return score
      return prevScore
    })
    setClickedIds([])
    setShowDialog(false)
    if (score !== goal) {
      setImages((prevImages) => fisherYatesShuffle(prevImages))
    } else fetchAndShuffle()
  }

  const fetchAndShuffle = () => {
    fetch('/images.json')
      .then((res) => res.json())
      .then((data) => {
        setImages(
          fisherYatesShuffle(data).slice(
            0,
            difficulty == 'easy' ? 4 : difficulty == 'medium' ? 6 : 8
          )
        )
      })
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('/images.json')
        .then((res) => res.json())
        .then((data) => {
          setImages(
            fisherYatesShuffle(data).slice(
              0,
              difficulty == 'easy' ? 4 : difficulty == 'medium' ? 6 : 8
            )
          )
        })
    }, 5000)
  }, [difficulty])

  useEffect(() => {
    if (goal > 0 && score == goal) {
      setShowDialog(true)
    }
  }, [score, goal])

  if (images.length < 1) {
    return <Spinner />
  }

  return (
    <>
      <div className='gallery'>
        {images.map((image) => (
          <Card
            key={image.id}
            id={image.id}
            url={image.url}
            title={image.title}
            handleClick={handleClick}
            flipCards={flipCards}
          />
        ))}
      </div>
      <div className='progress'>
        <progress value={clickedIds.length} max={goal}></progress>
        <span>
          <strong className='currentScore'>{clickedIds.length}</strong>/{goal}
        </span>
      </div>
      <ResultDialog
        isWin={score == goal}
        showDialog={showDialog}
        handleRestart={handleRestart}
      />
    </>
  )
}
