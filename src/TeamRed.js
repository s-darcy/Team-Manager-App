import React, {Component} from 'react';

class TeamRed extends Component {
    
    render(){
        
        return (
            <div className="teamRed">
                <h2>Red Team Players</h2>
                <div className="innerDiv">
                    <ol>
                        <li>{}</li>
                    </ol>
                    <button className="tradePlayerButton">Trade Player</button>
                    <button className="freeAgentButton">Free Agent</button>
                </div>
            </div>
        );
    }    
}            
            
export default TeamRed;      
