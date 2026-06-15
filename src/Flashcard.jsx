import { continentColors } from './cards'

// A single flashcard. It receives one `card` from its parent (App) plus the
// flipped state and a click handler. Only one side of the pair is shown at a
// time; clicking flips between the country (front) and capital (back).
function Flashcard({ card, isFlipped, onFlip }) {
  const accent = continentColors[card.continent] || '#6366f1'

  return (
    <div
      className={`flashcard ${isFlipped ? 'flipped' : ''}`}
      onClick={onFlip}
      style={{ '--accent': accent }}
    >
      <div className="flashcard-inner">
        {/* Front: the country (the question) */}
        <div className="flashcard-face flashcard-front">
          <span className="category-badge">{card.continent}</span>
          <img
            className="flag"
            src={`https://flagcdn.com/w320/${card.code}.png`}
            alt={`Flag of ${card.country}`}
          />
          <p className="prompt-label">What is the capital of</p>
          <h2 className="card-text">{card.country}?</h2>
          <p className="hint">Click to reveal</p>
        </div>

        {/* Back: the capital (the answer) */}
        <div className="flashcard-face flashcard-back">
          <span className="category-badge">{card.continent}</span>
          <p className="prompt-label">The capital is</p>
          <h2 className="card-text">{card.capital}</h2>
          <p className="hint">Click to flip back</p>
        </div>
      </div>
    </div>
  )
}

export default Flashcard
