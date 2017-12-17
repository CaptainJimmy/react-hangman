import React, {Component} from 'react';
import {
    Button,
    Panel,
    Jumbotron,
    Row,
    Col,
} from 'react-bootstrap';
import {mapValues} from 'lodash'
import Guesses from './components/Guesses'
import Keyboard from "./components/Keyboard";
import Scoreboard from './components/Scoreboard'
import Answerarrays from './components/Answerarrays'
import Messages from './components/Messages'
import axios from 'axios'

class App extends Component {

    state = {
        score: {
            gamesWon: 0,
            gamesLost: 0,
            gamesPlayed: 0,
            correctGuesses: 0,
            incorrectGuesses: 0,
            totalGuessesMade: 0,
            incorrectGuessesRemaining: 7,
        },
        gameRunning: false,
        messages: "",
        messageType: "default",
        messageDisabled: true,
        gameOverMessage:  null,
        answer: {
            word: "",
            wordArray: [],
            clueArray: [],
            numberOfLetters: 0,
            numberOfLettersRemaining: 0,
            guessesMadeArray: [],
            incorrectGuessesArray: [],
            correctGuessesArray: []
        },
        keyboard: {
            row1: {
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
                status: {
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
                status: {
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
                keys: [
                    "z",
                    "x",
                    "c",
                    "v",
                    "b",
                    "n",
                    "m"
                ],
                status: {
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
 

    newGameHandler = () => {
                 axios.get("https://api.wordnik.com:443/v4/words.json/randomWords?hasDictionaryDef=true&includePartOfSpeech=noun&excludePartOfSpeech=conjunction&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5"
        ).then( (result) => {
            let pickedWord=result.data[0].word.toLowerCase();
        let newGameScore = {
            ...this.state.score
        }
        newGameScore.correctGuesses = 0
        newGameScore.incorrectGuesses = 0
        newGameScore.totalGuessesMade = 0
        newGameScore.incorrectGuessesRemaining = 7
        let newAnswer = {
            ...this.state.answer
        }
        newAnswer.word = pickedWord
        newAnswer.wordArray = newAnswer
            .word
            .split("")
        newAnswer.clueArray = []
        for (let i = 0; i < newAnswer.wordArray.length; i++) {
            newAnswer
                .clueArray
                .push(null)
        //reset the keyboard
        let newKeyboard = {...this.state.keyboard}
        newKeyboard.row1.status = mapValues(newKeyboard.row1.status, ()=> false)
        newKeyboard.row2.status = mapValues(newKeyboard.row2.status, () => false)
        newKeyboard.row3.status = mapValues(newKeyboard.row3.status, () => false)

        newAnswer.numberOfLetters = newAnswer.wordArray.length
        newAnswer.numberOfLettersRemaining = newAnswer.wordArray.length
        newAnswer.guessesMadeArray=[];
        newAnswer.incorrectGuessesArray=[]
        newAnswer.correctGuessesArray=[]
        this.setState({
            score: newGameScore, 
            gameRunning: true,
            messages: "Good Luck",
            messageType: "info",
            messageDisabled: false,
            answer: newAnswer,
            keyboard:newKeyboard,
        })
    }
    }
        )
    }
    keyboardClickHandler = (event,row) => {
        if (this.state.gameRunning){
        let keyPressed = event.target.value
        //set the state to disable the key
        let newKeyboard={...this.state.keyboard}
        newKeyboard[row].status[keyPressed]=true
        this.setState({keyboard: newKeyboard})

        //pull the state object
        let newGameScore = {...this.state.score}
        let newAnswer = {...this.state.answer}
         newGameScore.totalGuessesMade++;
         newAnswer.guessesMadeArray.push(keyPressed)
        let newMessages = ""
        let newMessageType = ""
        let newMessageDisabled = false
            //check to see if tthe answer is correct
        if (newAnswer.wordArray.includes(keyPressed)){
             newMessages="Correct"
             newMessageType="success"
             newMessageDisabled = false
            newGameScore.correctGuesses++ 
            newAnswer.correctGuessesArray.push(keyPressed)
            //update the arrays
            newAnswer.wordArray.map( (item,index) =>{
                if (item===keyPressed){
                    newAnswer.clueArray[index]=keyPressed
                    newAnswer.numberOfLettersRemaining--
                }
            })
            //update the fields
        } else { 
                        //update the fields 
              newMessages="Ouch. Wrong."
              newMessageType="danger"
              newMessageDisabled = false
            newGameScore.incorrectGuesses++
            newGameScore.incorrectGuessesRemaining--
            newAnswer.incorrectGuessesArray.push(keyPressed)
        }
        //push the state, sets a callback 
        this.setState({
                score: newGameScore,
                keyboard: newKeyboard,
                messages: newMessages,
                messageType: newMessageType,
                messageDisabled: newMessageDisabled,
                answer: newAnswer
        },()=>{

        //game over check
        if (this.state.score.incorrectGuessesRemaining === 0) {
            let newMessages="Good Game.  Sorry you lose. The correct answer was " +this.state.answer.word
            let newMessageType="danger"
            let newScoreBoard={...this.state.score}
            newScoreBoard.gamesLost++
            newScoreBoard.gamesPlayed++
            this.setState({
                score: newScoreBoard,
                gameRunning: false,
                messages: newMessages,
                gameOverMessage: newMessages,
                messageType: newMessageType,
                messageDisabled: false,
            })
            this.disableKeyBoard()
        }
        else if (this.state.answer.numberOfLettersRemaining === 0 ) {
            let newMessages="Nice game. You won! Your winning answer: " +this.state.answer.word
            let newMessageType="success"
            let newScoreBoard={...this.state.score}
            newScoreBoard.gamesWon++
            newScoreBoard.gamesPlayed++
            this.setState({
                score: newScoreBoard,
                gameRunning: false,
                messages: newMessages,
                gameOverMessage : newMessages,
                messageType: newMessageType,
                messageDisabled: false
            })
            this.disableKeyBoard()

        }
    })
    }
    }

    disableKeyBoard = () => {
        let newKeyboard = {...this.state.keyboard}
        newKeyboard.row1.status = mapValues(newKeyboard.row1.status, ()=> true)
        newKeyboard.row2.status = mapValues(newKeyboard.row2.status, () => true)
        newKeyboard.row3.status = mapValues(newKeyboard.row3.status, () => true)
        this.setState({keyboard:newKeyboard})
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <Jumbotron>
                        <h2>
                            React Hangman for those without necks. Or Keyboards.</h2>
                        <p>Click the new game button to start</p>
                        { this.state.gameRunning ? null : <Button id="new-game" bsStyle="danger" onClick={this.newGameHandler}>New Game</Button>}
                        { this.state.gameRunning ?<Messages type={this.state.messageType} messages={this.state.messages}/> : null }
                        { this.state.gameOverMessage ? <Messages type={this.state.messageType} messages={this.state.gameOverMessage}/> : null }
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
                                click={(event) => this.keyboardClickHandler(event,"row1")}/>
                            <Keyboard
                                keyboard={this.state.keyboard.row2} 
                                click={(event) => this.keyboardClickHandler(event,"row2")}/>
                            <Keyboard
                                keyboard={this.state.keyboard.row3}
                                click={(event) => this.keyboardClickHandler(event,"row3")}/>
                            
                        </Panel>
                    </Col>
                </Row>
            <Answerarrays answer={this.state.answer}/> 
    
            <div>
                <Scoreboard score={this.state.score}/>
            </div>

            </div>
        )
    }
}
export default App;
