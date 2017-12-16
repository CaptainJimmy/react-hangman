import React from 'react'
import {Panel, Col, Button, Glyphicon, ButtonGroup} from 'react-bootstrap'

const guesses = props => {



// is the game running?
if (!props.gameRunning) {
        return (
    <Col sm={6} xs={12}>
        <div> 
            <Panel>
            <h3>
                Click Start!
            </h3>
            </Panel>
        </div>
    </Col>
        )
    } else {
const guessesMade = () =>{
    if (props.guessesMade) {
        return (
            <ButtonGroup>
                {props.score.guessesMadeArray.map((item, index) => {
                   return <Button bsSize="small" disabled key={index}>{item.toUpperCase()}</Button>
                })}
            </ButtonGroup>
        )
    }
}
return (
    <Col sm={6} xs={12}>
        <div>
            <Panel header="Guesses:">
                <div className="clue-buttons" id="picked-word-array">
                    <ButtonGroup>
                        {props.answer.clueArray.map((item, index) => {
                                if (item) {
                                    return <Button bsStyle="success" bsSize="large" disabled key={index}>{item.toUpperCase()}</Button>
                                } else {
                                    return <Button bsStyle="default" bsSize="large" key={index} disabled><Glyphicon glyph="star"/></Button>
                                }
                            })}
                    </ButtonGroup>
                </div>
                <div className="clue-buttons" id="guesses-made">
                    <h3>Guesses Made: </h3>
                    {this.guessesMade}
                    
                </div>
                <div className="clue-buttons" id="guesses-remaining">
                    <h3> Guesses Remaining: {props.score.incorrectGuessesRemaining}
                    </h3>
                </div>
                <div id="total-word-size">
                    <h3>
                        Total Number of Letters in Word: {props.answer.numberOfLetters}</h3>
                        <h3>Number of Letters Remaining to be Guessed: {props.answer.numberOfLettersRemaining} 
                    </h3>
                </div>
            </Panel>
        </div>
    </Col>
)
}
}

export default guesses;