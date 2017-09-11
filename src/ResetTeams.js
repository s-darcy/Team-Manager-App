import React, {Component} from 'react';

class ResetTeams extends Component {
    render(){
        
        return (
                <button onClick={(event) => this.props.reset(this.props.originalPlayers, this.props.originalRedTeam, this.props.originalBlueTeam, event)} className="resetButton">Reset</button>
        );
    }
}            
            
export default ResetTeams;       






