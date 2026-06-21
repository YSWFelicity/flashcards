import { useState } from 'react'
import { cardSet } from './cards'
import Flashcard from './Flashcard'
import GuessForm from './GuessForm'

// Normalize an answer so matching is forgiving: lowercase, strip accents
// (Brasília -> brasilia), drop punctuation, and collapse extra spaces. This is
// the "fuzzy matching" stretch feature.
function normalize(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '') // remove diacritic marks
    .replace(/[^a-z0-9\s]/g, ' ') // punctuation -> space (so "new-delhi" matches)
    .replace(/\s+/g, ' ')
    .trim()
}

function App() {
  const { title, description } = cardSet

  // The working deck. Lives in state so we can shuffle it and remove mastered
  // cards. We copy the source array so we never mutate the import.
  const [cards, setCards] = useState(() => [...cardSet.cards])
  const [mastered, setMastered] = useState([])

  // Which card is showing, and whether it's flipped to the answer.
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  // The guess box and the result of the last submission for this card.
  const [guess, setGuess] = useState('')
  const [result, setResult] = useState(null) // 'correct' | 'incorrect' | null

  // Streak counters (stretch feature).
  const [currentStreak, setCurrentStreak] = useState(0)
  const [longestStreak, setLongestStreak] = useState(0)

  const currentCard = cards[currentIndex]
  const atStart = currentIndex === 0
  const atEnd = currentIndex === cards.length - 1

  // Whenever we move to a different card, clear the per-card UI (flip + guess).
  const goToCard = (index) => {
    setCurrentIndex(index)
    setIsFlipped(false)
    setGuess('')
    setResult(null)
  }

  const handleFlip = () => setIsFlipped((flipped) => !flipped)

  // Ordered navigation — no wrap-around. The buttons are disabled at the
  // boundaries, but we guard here too.
  const handlePrev = () => {
    if (atStart) return
    goToCard(currentIndex - 1)
  }
  const handleNext = () => {
    if (atEnd) return
    goToCard(currentIndex + 1)
  }

  // Check the typed guess against the card's capital using fuzzy matching, and
  // update the streak counters accordingly.
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!guess.trim()) return

    const isCorrect = normalize(guess) === normalize(currentCard.capital)
    setResult(isCorrect ? 'correct' : 'incorrect')

    if (isCorrect) {
      const next = currentStreak + 1
      setCurrentStreak(next)
      setLongestStreak((longest) => Math.max(longest, next))
      setIsFlipped(true) // reveal the answer on a correct guess
    } else {
      setCurrentStreak(0)
    }
  }

  // Shuffle the deck into a new random order (Fisher–Yates) and start over.
  const handleShuffle = () => {
    const shuffled = [...cards]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    setCards(shuffled)
    goToCard(0)
  }

  // Mark the current card mastered: pull it from the deck into the mastered
  // list, then settle on a sensible neighbouring card.
  const handleMaster = () => {
    const card = currentCard
    const remaining = cards.filter((_, i) => i !== currentIndex)
    setCards(remaining)
    setMastered((prev) => [...prev, card])
    // Stay near where we were; clamp to the new last index.
    const nextIndex = Math.min(currentIndex, remaining.length - 1)
    goToCard(Math.max(nextIndex, 0))
  }

  // The whole deck has been mastered — celebrate instead of showing a card.
  if (cards.length === 0) {
    return (
      <div className="app">
        <header className="header">
          <h1>{title}</h1>
        </header>
        <main className="done-screen">
          <p className="done-emoji">🏆</p>
          <h2>You mastered all {mastered.length} cards!</h2>
          <button className="next-button" onClick={() => window.location.reload()}>
            Start over
          </button>
        </main>
      </div>
    )
  }

  return (
    <div className="app">
      <header className="header">
        <h1>{title}</h1>
        <p className="description">{description}</p>
        <div className="stats">
          <span className="stat-pill">📚 {cards.length} cards</span>
          <span className="stat-pill">🔥 Streak: {currentStreak}</span>
          <span className="stat-pill">🏅 Best: {longestStreak}</span>
          {mastered.length > 0 && (
            <span className="stat-pill">✅ Mastered: {mastered.length}</span>
          )}
        </div>
      </header>

      <main>
        <p className="progress">
          Card {currentIndex + 1} of {cards.length}
        </p>

        <Flashcard card={currentCard} isFlipped={isFlipped} onFlip={handleFlip} />

        <GuessForm
          guess={guess}
          onChange={(e) => setGuess(e.target.value)}
          onSubmit={handleSubmit}
          result={result}
        />

        <div className="controls">
          <button
            className="nav-button"
            onClick={handlePrev}
            disabled={atStart}
          >
            ← Back
          </button>
          <button className="master-button" onClick={handleMaster}>
            ⭐ Mastered
          </button>
          <button className="nav-button" onClick={handleNext} disabled={atEnd}>
            Next →
          </button>
        </div>

        <div className="controls controls--secondary">
          <button className="shuffle-button" onClick={handleShuffle}>
            🔀 Shuffle
          </button>
        </div>
      </main>

      <footer className="footer">
        <p>Type a guess and submit • Flip the card • Navigate with Back / Next</p>
      </footer>
    </div>
  )
}

export default App
