import React from 'react';
import data from './data';

function TeamRed (props) {
    return (
        <div className="teamRed">
            <h2>Red Team Players</h2>
            <div className="innerDiv">
                <ol>
                    <li>{props.reds}</li>
                </ol>
                <button className="tradePlayerButton">Trade Player</button>
                <button className="freeAgentButton">Free Agent</button>
            </div>
        </div>
    );
}            
            
export default TeamRed;            