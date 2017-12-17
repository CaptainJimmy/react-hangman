import React from "react";
import {Button,Row,Col, Well, ButtonGroup} from 'react-bootstrap';

const answerarrays = props => {


return (
<Row>
    <Col xs={6}>
        <Well>
              <h4> Correct Guesses:</h4>
            <ButtonGroup> 
        {props
        .answer
        .correctGuessesArray
        .map((item, index) => {
            return (
                <Button bsStyle="info" bsSize="large" key={index} value={item}>
                    {item.toUpperCase()}
                    
                </Button>
                ) } ) }
                </ButtonGroup>
        </Well>
    </Col>
    <Col xs={6}>
        <Well> 
            <h4> Incorrect Guesses:</h4>
            <ButtonGroup>
        {props
        .answer
        .incorrectGuessesArray
        .map((item, index) => {
            return (
                <Button
                    bsStyle="danger"
                    bsSize="large"
                    key={index}
                    value={item}>
                    {item.toUpperCase()}
                    
                </Button>
                ) } ) }
                </ButtonGroup>
            </Well>
    </Col>
</Row>
)
}

export default answerarrays;
