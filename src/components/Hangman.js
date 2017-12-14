import React from "react";

const wordArray = ["television","christmas","ponderosa","ravioli"];
const pickWord = () = (
    return wordArray[Math.floor(Math.random(wordArray.length*3)-1)];
);
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const NewGame = props => (
// get a new word from the array
console.log(pickWord)
// create the clue line / picked word array
// zero out the scores
//render the scoreboard

);

const Keys = event => (
//key event when a key is pressed
//disable the key
// check to see if the key pressed is a letter in the guessWord
    //if success, add the key to success area, update the picked word array
        //check to see if the game is over
    //if fail, add the key to the fail area, subract guesses left
        //check to see if the game is over
);

const GameOver = event => (
//update the score board, messages, etc

);


export default List;
