// The guess input. Lives below the card so the user can type an answer before
// flipping. It owns nothing — the input value, the submit handler, and the
// result ('correct' | 'incorrect' | null) all come from the parent (App).
function GuessForm({ guess, onChange, onSubmit, result, disabled }) {
  return (
    <form className="guess-form" onSubmit={onSubmit}>
      <label className="guess-label" htmlFor="guess">
        Your guess
      </label>
      <div className="guess-row">
        <input
          id="guess"
          className={`guess-input ${result ? `guess-input--${result}` : ''}`}
          type="text"
          value={guess}
          onChange={onChange}
          placeholder="Type the capital city…"
          autoComplete="off"
          disabled={disabled}
        />
        <button type="submit" className="submit-button" disabled={disabled}>
          Submit
        </button>
      </div>

      {/* Visual feedback: green for correct, red for incorrect. */}
      {result === 'correct' && (
        <p className="feedback feedback--correct">✅ Correct! Nicely done.</p>
      )}
      {result === 'incorrect' && (
        <p className="feedback feedback--incorrect">
          ❌ Not quite — try again or flip the card.
        </p>
      )}
    </form>
  )
}

export default GuessForm
