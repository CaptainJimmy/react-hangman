import React from "react";
import {Button,Row,Col, Container, ButtonGroup} from 'react-bootstrap';

const answerarrays = props => {


return (
<Row>
    <Col xs={6}>
        <Container>
              <h4> Correct Guesses:</h4>
            <ButtonGroup> 
        {props
        .answer
        .correctGuessesArray
        .map((item, index) => {
            return (
                <Button variant="info" size="lg" key={index} value={item}>
                    {item.toUpperCase()}
                    
                </Button>
                ) } ) }
                </ButtonGroup>
        </Container>
    </Col>
    <Col xs={6}>
        <Container> 
            <h4> Incorrect Guesses:</h4>
            <ButtonGroup>
        {props
        .answer
        .incorrectGuessesArray
        .map((item, index) => {
            return (
                <Button
                    variant="danger"
                    size="lg"
                    key={index}
                    value={item}>
                    {item.toUpperCase()}
                    
                </Button>
                ) } ) }
                </ButtonGroup>
            </Container>
    </Col>
</Row>
)
}

export default answerarrays;
