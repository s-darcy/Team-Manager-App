import React, {Component} from 'react';

class FreeAgents extends Component {

    render(){
        
        return (
            <ul>
                <li className="bravesPlayers">{this.props.bravesPlayer.name}
                    <button onClick={this.tradeToBlue}className="redButton">Red</button>
                    <button className="blueButton">Blue</button>
                </li>    
            </ul>  
        );    
    }            
}            
            
export default FreeAgents; 