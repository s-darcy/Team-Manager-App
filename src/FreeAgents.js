import React from 'react';

function FreeAgents (props) {
    return (
        <div className="freeAgents">
            <h2>Free Agents</h2>
            <p>These players are currently unassigned to either team. Would like to add them to a team?</p>
            <div className="innerDiv">
                <ol className="unassignedPlayers">
                    <li>{props.playersUnassigned }</li>
                </ol>
                <button className="redButton">Red Team</button>
                <button className="blueButton">Blue Team</button>
            </div>
        </div>
    );    
}            
            
export default FreeAgents;       