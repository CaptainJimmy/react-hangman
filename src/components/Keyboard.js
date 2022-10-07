import React from "react";
import {Button} from 'react-bootstrap';


const keyboard = props => {
    
return (
    <div>
        {props.keyboard.keys.map((item,index) => {
            let status = props.keyboard.status[item]
            return (
           <Button variant={props.keyboard.style} size="lg" onClick={props.click} key={index} disabled={status} value={item}> {item.toUpperCase()}
            </Button>
        )
    }
    )
}
    </div>
)
}

export default keyboard;
