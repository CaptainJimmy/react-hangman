import React from "react";
import {Panel} from 'react-bootstrap';

const messages = props => {

    return (
        <Panel title={props.messages} bsStyle={props.type} disabled={props.disabled} />
    )
}

export default messages;