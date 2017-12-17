import React from "react";
import {Panel,Col} from 'react-bootstrap';

const messages = props => {
    const title = ( <h3><strong> {props.messages} </strong></h3> )
    return (
    <div>    
        <Col xs={3}>
        </Col>
        <Col xs={6}>
            <Panel header={title} bsStyle={props.type}/>
        </Col>
        <Col xs={3}>
        </Col>
    </div>
    )
}

export default messages;