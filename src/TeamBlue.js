import React, {Component} from 'react';

class TeamBlue extends Component {
    render(){
        
        return (
            <li className="assignedPlayers">{this.props.bluesPlayer.name}
                <button className="tradePlayerButton">Trade</button>
                <button className="freeAgentButton">Free</button>
            </li>
        );
    }     
}            
            
export default TeamBlue;      
