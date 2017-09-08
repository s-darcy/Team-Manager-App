import React, {Component} from 'react';

class TeamRed extends Component {
  
    render(){
//      const redder = this.refs.name.value;
        return (
            <li ref='name' className="assignedPlayers">{this.props.redsPlayer.name}
                <button onClick={(event) => this.props.tradeToBlue(this.props.redsPlayer, this.props.IDValue, event)} className="tradePlayerButton">Trade</button>
                <button className="freeAgentButton">Free</button>
            </li>
        );
    }    
}            
            
export default TeamRed;      
