import React from "react";
import {Button, Well, ButtonGroup} from 'react-bootstrap';

const answerarrays = props => {


return (
    <div>
        <Well>
              <h3> Correct Guesses:</h3
            <ButtonGroup> 
        {props
        .answer
        .correctGuessesArray
        .map((item, index) => {
            return (
                <Button bsStyle="info" bsSize="large" key={index} disabled="true" value={item}>
                    {item.toUpperCase()}
                    
                </Button>
                ) } ) }
                </ButtonGroup>
            </Well>
        <Well> 
            <h3> Incorrect Guesses:</h3>
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
                    disabled="true"
                    value={item}>
                    {item.toUpperCase()}
                    
                </Button>
                ) } ) }
                </ButtonGroup>
            </Well>
    </div>
)
}

export default answerarrays;
