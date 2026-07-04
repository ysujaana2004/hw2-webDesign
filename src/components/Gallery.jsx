import { useEffect, useState } from 'react'

const SLIDE_IMAGES = [
  '/images/prawns.png',
  '/images/lassi.png',
  '/images/green-cocktail.png',
  '/images/fish-curry.png',
  '/images/pani-puri.png',
  '/images/feast.png',
]

export default function Gallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const showSlide = (index) => {
    setCurrentSlide((index + SLIDE_IMAGES.length) % SLIDE_IMAGES.length)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="gallery" className="section container">
      <h2 className="section-title">Visual Journey</h2>
      <div className="gallery-slider" id="slider">
        {SLIDE_IMAGES.map((image, index) => (
          <div
            key={image}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url('${image}')` }}
          ></div>
        ))}

        <button className="slider-btn prev-btn" onClick={() => showSlide(currentSlide - 1)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="slider-btn next-btn" onClick={() => showSlide(currentSlide + 1)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
    </section>
  )
}
