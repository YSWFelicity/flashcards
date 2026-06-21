# Web Development Project 3 - World Capital Flashcards

Submitted by: **Yingshu**

This web app: **Capital Quest is a geography flashcard app that tests how well you know the world's capital cities. Each card shows a country (along with its flag) and challenges you to recall its capital. Type your guess into the answer box and submit it for instant correct/incorrect feedback, flip the card to check, and move through the deck with Back / Next. Shuffle the deck, build a streak of correct answers, and mark cards as mastered to retire them. Cards are color-coded by continent so you can see at a glance which region you're studying.**

Time spent: **10** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The user can submit a guess into an input box before seeing the flipside of a card**
  - A clearly labeled input box with a Submit button lets the user type a guess
  - Submitting an incorrect answer shows visual feedback that it is wrong (red input + "Not quite" message)
  - Submitting a correct answer shows visual feedback that it is correct (green input + "Correct!" message, and the card flips to reveal the answer)
- [x] **The user can navigate through an ordered list of cards**
  - A forward / Next button moves to the next card in the set sequence
  - A previous / Back button returns to the previous card in the set sequence
  - The Back and Next buttons gray out and become unclickable at the beginning and end of the list (no wrap-around navigation)

The following **stretch** features are implemented:

- [x] **Users can use a shuffle button to randomize the order of the cards** — cards stay in their original sequence until the Shuffle button is clicked, which reorders the deck with a Fisher–Yates shuffle.
- [x] **A user's answer may be counted as correct even when it is slightly different from the target answer** — guesses are matched fuzzily, ignoring uppercase/lowercase, accents (e.g. "Brasilia" matches "Brasília"), punctuation, and extra spacing.
- [x] **A counter displays the user's current and longest streak of correct responses** — the current streak increments on a correct guess and resets to 0 on an incorrect one; the longest streak updates whenever the current streak exceeds it.
- [x] **A user can mark a card that they have mastered and have it removed from the pool of displayed cards** — the ⭐ Mastered button removes the current card from the deck and tracks it in a mastered count; once every card is mastered a celebration screen is shown.

## Carried over from Part 1

- [x] The title, description, and total card count are displayed
- [x] A single card is shown at a time, displaying only one side of the pair
- [x] Clicking a card flips it to reveal the other side (3D flip animation)
- [x] Cards include images — each card shows the country's flag (loaded from flagcdn.com)
- [x] Cards are visually styled by category — accent-colored by continent with a matching badge

## Video Walkthrough

Here's a walkthrough of implemented required features:

[Watch the demo video](https://drive.google.com/file/d/1mUorQlActqBYQ-bVt978hToSwQov_ZGA/view?usp=sharing)

## Notes

In Part 2 the trickiest part was managing the growing amount of state. The app now tracks the working deck (so it can be shuffled and have mastered cards removed), the current index, the flip state, the guess text, the result of the last submission, and both streak counters. Keeping these in sync — for example, clearing the guess and flip whenever the user navigates to a different card, and recomputing the boundary conditions so the Back / Next buttons disable correctly at the ends — took careful thought. Implementing fuzzy answer matching was also interesting: I normalized both the guess and the target by lowercasing, stripping accents with `String.normalize('NFD')`, removing punctuation, and collapsing whitespace so that answers like "Brasilia" still match "Brasília".

From Part 1, getting the card to flip with a smooth animation using CSS 3D transforms (`transform-style: preserve-3d` and `backface-visibility: hidden`) and passing data and handlers from `App` down to the nested `Flashcard` and `GuessForm` components as props were the main early challenges.

## License

    Copyright 2026 Yingshu

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
