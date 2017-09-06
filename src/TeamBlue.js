import React, {Component} from 'react';

class TeamBlue extends Component {
    render(){
        
        return (
            <div className="teamBlue">
                <h2>Blue Team Players</h2>
                <div className="innerDiv">
                    <ol>
                        <li>Blue Team First Player</li>
                    </ol>
                    <button className="tradePlayerButton">Trade Player</button>
                    <button className="freeAgentButton">Free Agent</button>
                </div>
            </div>
        );
    }     
}            
            
export default TeamBlue;      
