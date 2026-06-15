// The flashcard set: each card is a pair (question = country, answer = capital).
// `continent` drives the category color styling, and `code` is the ISO 3166-1
// alpha-2 code used to pull a flag image from flagcdn.com.
export const cardSet = {
  title: 'Capital Quest 🌍',
  description:
    'How well do you know the world? Each card shows a country — flip it to reveal its capital city. Hit "Next Card" for a new one at random.',
  cards: [
    { country: 'France', capital: 'Paris', continent: 'Europe', code: 'fr' },
    { country: 'Japan', capital: 'Tokyo', continent: 'Asia', code: 'jp' },
    { country: 'Brazil', capital: 'Brasília', continent: 'South America', code: 'br' },
    { country: 'Egypt', capital: 'Cairo', continent: 'Africa', code: 'eg' },
    { country: 'Australia', capital: 'Canberra', continent: 'Oceania', code: 'au' },
    { country: 'Canada', capital: 'Ottawa', continent: 'North America', code: 'ca' },
    { country: 'Kenya', capital: 'Nairobi', continent: 'Africa', code: 'ke' },
    { country: 'Germany', capital: 'Berlin', continent: 'Europe', code: 'de' },
    { country: 'India', capital: 'New Delhi', continent: 'Asia', code: 'in' },
    { country: 'Argentina', capital: 'Buenos Aires', continent: 'South America', code: 'ar' },
    { country: 'South Korea', capital: 'Seoul', continent: 'Asia', code: 'kr' },
    { country: 'Norway', capital: 'Oslo', continent: 'Europe', code: 'no' },
    { country: 'Mexico', capital: 'Mexico City', continent: 'North America', code: 'mx' },
    { country: 'New Zealand', capital: 'Wellington', continent: 'Oceania', code: 'nz' },
    { country: 'Morocco', capital: 'Rabat', continent: 'Africa', code: 'ma' },
    { country: 'Thailand', capital: 'Bangkok', continent: 'Asia', code: 'th' },
    { country: 'Peru', capital: 'Lima', continent: 'South America', code: 'pe' },
    { country: 'Italy', capital: 'Rome', continent: 'Europe', code: 'it' },
  ],
}

// Each continent gets its own accent color so cards are visually grouped by
// category (a stretch feature).
export const continentColors = {
  Europe: '#6366f1',
  Asia: '#ec4899',
  Africa: '#f59e0b',
  'North America': '#10b981',
  'South America': '#ef4444',
  Oceania: '#06b6d4',
}
