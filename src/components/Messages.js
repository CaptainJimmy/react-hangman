import React from "react";
import {Card,Col} from 'react-bootstrap';

const messages = props => {
    return (
    <div>    
        <Col xs={3}>
        </Col>
        <Col xs={6}>
        <h3><strong> {props.messages} </strong></h3>
        </Col>
        <Col xs={3}>
        </Col>
    </div>
    )
}

export default messages;