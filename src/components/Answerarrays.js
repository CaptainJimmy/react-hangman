import React from "react";
import {Button, Well, ButtonGroup} from 'react-bootstrap';

const answerarrays = props => {


return (
    <div>
        <Well>
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
