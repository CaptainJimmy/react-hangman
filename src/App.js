import React, {Component} from 'react';
import {
    Button,
    Panel,
    Jumbotron,
    Grid,
    Row,
    Col,
    Clearfix
} from 'react-bootstrap';
import Guesses from './components/Guesses'
import Keyboard from "./components/Keyboard";
import Scoreboard from './components/Scoreboard'

class App extends Component {

    state = {
        score: {
            gamesWon: 0,
            gamesLost: 0,
            gamesPlayed: 0,
            correctGuesses: 0,
            incorrectGuesses: 0,
            totalGuesses: 0,
            incorrectGuessesRemaining: 7
        },
        gameRunning: false,
        answer: {
            word: "",
            wordArray: [],
            clueArray: [],
            numberOfLetters: 0,
            guessesMade: [],
            incorrectGuesses: [],
            correctGuesses: []
        },
        keyboard: {
            row1: {
                keys: {
                    q: false,
                    w: false,
                    e: false,
                    r: false,
                    t: false,
                    y: false,
                    u: false,
                    i: false,
                    o: false,
                    p: false
                },
                style: "primary"
            },
            row2: {
                keys: {
                    a: false,
                    s: false,
                    d: false,
                    f: false,
                    g: false,
                    h: false,
                    j: false,
                    k: false,
                    l: false
                },
                style: "info"
            },
            row3: {
                keys: {
                    z: false,
                    x: false,
                    c: false,
                    v: false,
                    b: false,
                    n: false,
                    m: false
                },
                style: "success"
            }
        }
    }


keyboard = {
    "row1": {
        keys: [
            "q",
            "w",
            "e",
            "r",
            "t",
            "y",
            "u",
            "i",
            "o",
            "p"
        ],
        style: "primary"
    },
    "row2": {
        keys: [
            "a",
            "s",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l"
        ],
        style: "info"
    },
    "row3": {
        keys: [
            "z",
            "x",
            "c",
            "v",
            "b",
            "n",
            "m"
        ],
        style: "success"
    }
};
pickWord = () => {
    const wordArray = ["television", "christmas", "ponderosa", "ravioli"];
    let newIndex = Math.floor(Math.random() * wordArray.length)
    return wordArray[newIndex];
}
newGameHandler = () => {
    let newGameScore = {
        ...this.state.score
    }
    newGameScore.correctGuesses = 0
    newGameScore.incorrectGuesses = 0
    newGameScore.totalGuesses = 0
    newGameScore.incorrectGuessesRemaining = 7
    let newAnswer = {
        ...this.state.answer
    }
    newAnswer.word = this.pickWord()
    newAnswer.wordArray = newAnswer
        .word
        .split("")
    newAnswer.clueArray = []
    for (let i = 0; i < newAnswer.wordArray.length; i++) {
        newAnswer
            .clueArray
            .push(null)
    }
    newAnswer.numberOfLetters = newAnswer.wordArray.length
    this.setState({score: newGameScore, gameRunning: true, answer: newAnswer})
}

keyboardClickHandler = (event) => {
    console.log(event.target.value)
    let guessedLetter = event.target.value
    //pull the state object
    let newGameScore = {
        ...this.state.score
    }
    let newAnswer = {
        ...this.state.answer
    }
    newGameScore.totalGuesses++;
    //if (isCorrect(letter)) {
        //update the fields

    //} else {
        //update the fields

    //}
}
isCorrect = (letter) => {}
gameOverCheck = () => {}
gameOver = () => {}

render() {
    return (
        <div className="container-fluid">
            <div className="container">
                <Jumbotron>
                    <h2>
                        React Hangman for those without necks. Or Keyboards.</h2>
                    <p>Click the new game button to start</p>
                    <Button id="new-game" bsStyle="danger" onClick={this.newGameHandler}>New Game</Button>
                </Jumbotron>
            </div>
            <Row>
                <Guesses
                    answer={this.state.answer}
                    gameRunning={this.state.gameRunning}
                    score={this.state.score}/>

                <Col sm={6} xs={12}>
                    <Panel header="Keyboard:">
                        <Keyboard
                            keyboard={this.state.keyboard.row1}
                            click={(event) => this.keyboardClickHandler(event)}/>
                        <Keyboard
                            keyboard={this.state.keyboard.row2}
                            click={(event) => this.keyboardClickHandler(event)}/>
                        <Keyboard
                            keyboard={this.state.keyboard.row3}
                            click={(event) => this.keyboardClickHandler(event)}/>
                        <div id="messages">{this.messages}</div>
                    </Panel>
                </Col>
            </Row>
            <Scoreboard score={this.state.score}/>
        </div>
    )
}
};

export default App;
