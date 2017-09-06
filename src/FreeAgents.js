import React, {Component} from 'react';

class FreeAgents extends Component {

    render(){
        
        return (

                    <ul>
                        <li>{this.props.bravesPlayer.name}</li>
                        <button className="redButton">Red Team</button>
                        <button className="blueButton">Blue Team</button>
                    </ul>  

        );    
    }            
}            
            
export default FreeAgents; 