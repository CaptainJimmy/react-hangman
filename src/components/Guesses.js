import React from 'react'
import {Container, Col, Button, ButtonGroup, Card} from 'react-bootstrap'

const guesses = props => {




    if (props.guessesMade) {
        return (
            <ButtonGroup>
                {props.score.guessesMadeArray.map((item, index) => {
                   return <Button size="small" disabled key={index}>{item.toUpperCase()}</Button>
                })}
            </ButtonGroup>
        )
    }

return (
    <Col sm={6} xs={12}>
        <div>
            <Container header="Guesses:">
                <Card className="clue-buttons" id="picked-word-array">
                    <ButtonGroup>
                        {props.answer.clueArray.map((item, index) => {
                                if (item) {
                                    return <Button variant="success" size="lg" disabled key={index}>{item.toUpperCase()}</Button>
                                } else {
                                    return <Button variant="default" size="lg" key={index} disabled>*</Button>
                                }
                            })}
                    </ButtonGroup>
                </Card>
                <Card className="clue-buttons" id="guesses-made">
                    <h3>Guesses Made: </h3>
                    {props.guessesMade}
                    
                </Card>
                <Card className="clue-buttons" id="guesses-remaining">
                    <h3> Guesses Remaining: {props.score.incorrectGuessesRemaining}
                    </h3>
                </Card>
                <Card id="total-word-size">
                    <h3>
                        Total Number of Letters in Word: {props.answer.numberOfLetters}</h3>
                        <h3>Number of Letters Remaining to be Guessed: {props.answer.numberOfLettersRemaining} 
                    </h3>
                </Card>
            </Container>
        </div>
    </Col>
)
}


export default guesses;