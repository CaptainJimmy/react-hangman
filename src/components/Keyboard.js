import React from "react";
import {Button} from 'react-bootstrap';


const keyboard = props => {
return (
    <div>
        {props.keyboard.keys.map((item,index) => (
           <Button bsStyle={props.keyboard.style} bsSize="large" onClick={props.click} clicked = {props.clicked} key={index} > {item}
            </Button>
        ))}
    </div>
)
}

export default keyboard;
