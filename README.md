# memory_card_game

    A funny game while you are sharpening your code skills!!!

## Technologies used in this game

1. HTML

2. CSS

3. Vanilla JavaScript

   - DOM Manipulation

## All the functions on JS explained

    1. match() - use to compare 2 cards after the code identify if the variables ()firstGuess and secondGuess are not an empty variables and they are equal.

    2. resetGuesses() - used after two cards selected even if they match or not.

    3. grid.addEventListner() - it's the big section under the hood where the algorithms will detect on click events and will check the matches.

## Storaging the images

    The images were storaged in an array called cardsArray and then each element was duplicated to be a correspondent in the game. Used the concat method to do that.

## Mixing the images

    After storaging the image, I used sort() method and Math.random() to create a different position everytime the game resets.
