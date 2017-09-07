import React, {Component} from 'react';

class TeamRed extends Component {
    
    render(){
        
        return (
            <div className="teamRed">
                <h2>Red Team Players</h2>
                <div className="innerDiv">
                    <ol>
                        <li value={this.props.redsPlayer} className="assignedPlayers">{this.props.redsPlayer.name}
                            <button onClick={this.props.tradeToBlue} className="tradePlayerButton">Trade</button>
                            <button className="freeAgentButton">Free</button>
                        </li>
                    </ol>

                </div>
            </div>
        );
    }    
}            
            
export default TeamRed;      
