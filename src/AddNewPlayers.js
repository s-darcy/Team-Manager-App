import React from 'react';
import PropTypes from 'prop-types';

function AddNewPlayers (props) {
    return (
        <div className="addNewPlayer">
            <h2>Add New Players</h2>
            <p>When adding players, they will be first inserted into the 'Free Agents' section. From there you can assign them to either team.</p>
            <form>
                <label>Add Player Name </label>
                <input 
                    placeholder="New Player" 
                />
                <input 
                    className="submitButton" 
                    type="submit"
                />
            </form>
        </div>
    );
}

AddNewPlayers.PropTypes ={
   addNewPlayers : PropTypes.string 
};
            
export default AddNewPlayers;            