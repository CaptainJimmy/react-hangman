import React from "react";
import {Button} from 'react-bootstrap';

const keyboard = props => {
    console.log(props.keyboard.keys)
    return (
        <div>
            {for (let i=0;i<props.keyboard.keys.length; i++) {
                console.log(props.keyboard.keys[i]) 
                    console.log(item, index)
                    return (
                        <Button
                            bsStyle={props.keyboard.style}
                            bsSize="large"
                            onClick={props.click}
                            key={index}
                            value={item.toUpperCase()}>
                            {item.toUpperCase()}
                        </Button>
                    )
                }
                }

        </div>
    )
}

export default keyboard;
