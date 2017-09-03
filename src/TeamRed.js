import React from 'react';

function TeamRed (props) {
    return (
        <div className="teamRed">
            <h2>Red Team Players</h2>
            <div className="innerDiv">
                <ol>
                    <li>Red Team First Player</li>
                </ol>
                <button className="tradePlayerButton">Trade Player</button>
                <button className="freeAgentButton">Free Agent</button>
            </div>
        </div>
    );
}            
            
export default TeamRed;            