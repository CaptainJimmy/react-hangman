import React from "react";
import {Button} from 'react-bootstrap';


const keyboard = props => {
    
return (
    <div>
        {props.keyboard.keys.map((item,index) => {
            let status = props.keyboard.status[item]
            return (
           <Button bsStyle={props.keyboard.style} bsSize="large" onClick={props.click} key={index} disabled={status} value={item}> {item.toUpperCase()}
            </Button>
        )
    }
    )
}
    </div>
)
}

export default keyboard;
