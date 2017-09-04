import React, {Component} from 'react';
import FreeAgents from './FreeAgents';

class Player extends Component {
    
    render(){
        
        return (
           
        <ol>    
            <li>{this.props.playerUnassigned}</li>
        </ol>    
        );
    }
}            
            
export default Player;   