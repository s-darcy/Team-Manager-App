import React, {Component} from 'react';

class TeamBlue extends Component {
    render(){
        
        return (
            <li className="assignedPlayers">{this.props.bluesPlayer.name}
                <button onClick={(event) => this.props.tradeToRed(this.props.bluesPlayer, this.props.IDValue, event)}className="tradePlayerButton">Trade</button>
                <button className="freeAgentButton">Free</button>
            </li>
        );
    }     
}            
            
export default TeamBlue;      
