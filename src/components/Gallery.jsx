import '../styles/Gallery.css'
import Card from './Card'

const images = [
  { id: 1, url: 'https://cdn.marvel.com/content/1x/017lok_ons_crd_03.jpg' },
  { id: 2, url: 'https://cdn.marvel.com/content/1x/hawkeye_ons_crd_01.jpg' },
  { id: 3, url: 'https://cdn.marvel.com/content/1x/011blw_ons_crd_04.jpg' },
  { id: 4, url: 'https://cdn.marvel.com/content/1x/004tho_ons_crd_04.jpg' },
  { id: 5, url: 'https://cdn.marvel.com/content/1x/003cap_ons_crd_03.jpg' },
]

export default function Gallery() {
  return (
    <div className='gallery'>
      {images.map((image) => (
        <Card key={image.id} url={image.url} />
      ))}
    </div>
  )
}
