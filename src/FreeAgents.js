import React, {Component} from 'react';

class FreeAgents extends Component {

    render(){
        
        return (
            <ul>
                <li className="bravesPlayers">{this.props.bravesPlayer.name}
                    <button onClick={(event) => this.props.freeAgentsAssignedRed      (this.props.bravesPlayer, event)} className="redButton">Red</button>
                    <button onClick={(event) => this.props.freeAgentsAssignedBlue      (this.props.bravesPlayer, event)} className="blueButton">Blue</button>
                </li>    
            </ul>  
        );    
    }            
}            
            
export default FreeAgents; 