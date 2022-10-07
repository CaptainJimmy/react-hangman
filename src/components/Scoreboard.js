import React from "react";
import {Container} from 'react-bootstrap';

const scoreboard = props => {
return (
     <Container heading="Scoreboard:">
        <div id="wins">
            <h3> Wins: {props.score.gamesWon} </h3>
        </div>
        <div id="losses">
            <h3> Losses: {props.score.gamesLost} </h3>
        </div>
        <div id="games-played">
            <h3> Games Played: {props.score.gamesPlayed} </h3>
        </div>
    </Container>
)
}

export default scoreboard;