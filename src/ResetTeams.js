import React, {Component} from 'react';

class ResetTeams extends Component {
    render(){
        
        return (
            <div className="resetTeam">
                <h2>Reset Team Assignment</h2>
                <p>By pushing the 'Reset Teams' button below, you will be clearing your current team's players back to their original assignments. Are you sure that you want to change the team's?</p>
                <button className="resetButton">Reset Teams</button>
            </div>
        );
    }
}            
            
export default ResetTeams;       






