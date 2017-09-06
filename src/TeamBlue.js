import React, {Component} from 'react';

class TeamBlue extends Component {
    render(){
        
        return (
            <div className="teamBlue">
                <h2>Blue Team Players</h2>
                <div className="innerDiv">
                    <ol>
                        <li className="assignedPlayers">{this.props.bluesPlayer.name}
                            <button className="tradePlayerButton">Trade</button>
                            <button className="freeAgentButton">Free</button>
                        </li>
                    </ol>

                </div>
            </div>
        );
    }     
}            
            
export default TeamBlue;      
