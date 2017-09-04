import React, {Component} from 'react';

class Player extends Component {
    
    render(){
        return (
            <li>{this.props.player.name}</li>
        );
    }
}            
            
export default Player;   