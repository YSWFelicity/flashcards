# Web Development Project 2 - World Capital Flashcards

Submitted by: **Yingshu**

This web app: **Capital Quest is a geography flashcard app that tests how well you know the world's capital cities. Each card shows a country (along with its flag) and challenges you to recall its capital. Flip the card to check your answer, and hit "Next Card" to be quizzed on a new country chosen at random. Cards are color-coded by continent so you can see at a glance which region you're studying.**

Time spent: **6** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The title of the card set and some information about it, such as a short description and the total number of cards are displayed**
- [x] **A single card at a time is displayed, only showing one of the components of the information pair**
- [x] **A list of card pairs is created**
- [x] **Clicking on the card shows the corresponding component of the information pair**
- [x] **Clicking the next button displays a random new card**

The following **optional** features are implemented:

- [x] **Cards contain images in addition to or in place of text** — each card displays the country's flag (loaded from flagcdn.com)
- [x] **Cards have different visual styles such as color based on their category** — cards are accent-colored by continent (Europe, Asia, Africa, North America, South America, Oceania), each with a matching category badge

The following **additional** features are implemented:

- A 3D flip animation plays when a card is clicked, rotating between the country (front) and the capital (back).
- The "Next Card" button is guaranteed to pick a *different* card than the one currently showing, so the same card never appears twice in a row.

## Video Walkthrough

Here's a walkthrough of implemented required features:

[Watch the demo video](https://drive.google.com/file/d/1mUorQlActqBYQ-bVt978hToSwQov_ZGA/view?usp=sharing)

## Notes

One challenge I ran into while building this app was getting the card to flip with a smooth animation. Showing only one side of the pair at a time meant using CSS 3D transforms (`transform-style: preserve-3d` and `backface-visibility: hidden`) rather than simply swapping the text, which took some trial and error to line up correctly. Another challenge was passing data and a function from the parent `App` component down to the custom `Flashcard` component as props, and making sure clicking the "Next Card" button never landed on the same card that was already showing.

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
