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
        score: 
            {
                gamesWon: 0,
                gamesLost: 0,
                gamesPlayed: 0,
                correctGuesses: 0,
                incorrectGuesses: 0,
                totalGuesses: 0,
                guessesRemaining: 7,
            },
        gameRunning: false,
        answer: {
                word: "",
                wordArray: [],
                clueArray: [],
                numberOfLetters: 0,
                guessesMade: [],
                incorrectGuesses: [],
                correctGuesses: [],
            },
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
        style: "warning"
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
        style: "danger"
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
        let newIndex= Math.floor(Math.random()*wordArray.length)
        return wordArray[newIndex];
    }
    newGameHandler = () => {
        let newGameScore = {...this.state.score}
        newGameScore.correctGuesses = 0
        newGameScore.incorrectGuesses = 0
        newGameScore.totalGuesses = 0
        newGameScore.guessesRemaining = 7
        let newAnswer = {...this.state.answer}
        newAnswer.word = this.pickWord()
        newAnswer.wordArray = newAnswer.word.split("")
        newAnswer.clueArray = []
        for (let i=0; i < newAnswer.wordArray.length; i++){
            newAnswer.clueArray.push(null)
        }
        newAnswer.numberOfLetters=newAnswer.wordArray.length
        this.setState({
            score: newGameScore, 
            gameRunning: true, 
            answer: newAnswer,
        })
    }

    keyboardClickHandler = (event) => {
    console.log(this.state.score)
    }

render() {
    return (
        <div className="container-fluid">
            <div className="container">
                <Jumbotron>
                    <h2>
                        React Hangman for those without necks. Or Keyboards.</h2>
                    <p>Click the new game button to start</p>
                    <Button id="new-game" bsStyle="danger" onClick={this.newGameHandler}>New Game</Button>
                    <Button bsStyle="danger" onClick={this.keyboardClickHandler}>Testing Remove Me</Button>
                </Jumbotron>
            </div>
            <Row>
                <Guesses answer={this.state.answer} gameRunning={this.state.gameRunning} score={this.state.score}/>

                <Col sm={6} xs={12}>
                    <Panel header="Keyboard:">
                        <Keyboard keyboard={this.keyboard.row1} click={(event) => this.keyboardClickHandler}
                        />
                        <Keyboard keyboard={this.keyboard.row2} click={(event) => this.keyboardClickHandler}/>
                        <Keyboard keyboard={this.keyboard.row3} click={(event) => this.keyboardClickHandler}/>
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
