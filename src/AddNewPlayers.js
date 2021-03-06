import React, {Component} from 'react';
import PropTypes from 'prop-types';

class AddNewPlayers extends Component {
    render(){
        
       return (
            <div className="addNewPlayer">
                <h2>Add New Players</h2>
                <p>When adding players, they will be first inserted into the 'Free Agents' section. From there you can assign them to either team.</p>
                <form
                    onSubmit={this.props.newPlayerAdder}
                >
                    <label>Add Player Name </label>
                    <input 
                       name="inputName"
                    />
                    <input
                        className="submitButton" 
                        type="submit"
                    />
                </form>
            </div>
        );
    }
}            
    
export default AddNewPlayers;       
