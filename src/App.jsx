import { useState } from 'react'
import { cardSet } from './cards'
import Flashcard from './Flashcard'

function App() {
  const { title, description, cards } = cardSet

  // Which card is currently showing, and whether it's flipped to the answer.
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentCard = cards[currentIndex]

  // Flip the card over (front <-> back).
  const handleFlip = () => setIsFlipped((flipped) => !flipped)

  // Pick a NEW random card (never the one already showing) and reset to front.
  const handleNext = () => {
    if (cards.length <= 1) return
    let nextIndex = currentIndex
    while (nextIndex === currentIndex) {
      nextIndex = Math.floor(Math.random() * cards.length)
    }
    setCurrentIndex(nextIndex)
    setIsFlipped(false)
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <p className="card-count">
          📚 {cards.length} cards in this set
        </p>
      </header>

      <main>
        <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={handleFlip} />

        <div className="controls">
          <button className="next-button" onClick={handleNext}>
            Next Card →
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>Click a card to flip it • Tap “Next Card” for a random one</p>
      </footer>
    </div>
  )
}

export default App
