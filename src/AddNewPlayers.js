import React from 'react';

function AddNewPlayers (props) {
    return (
        <div className="addNewPlayer">
            <h2>Add New Players</h2>
            <p>When adding players, they will be first inserted into the 'Free Agents' section. From there you can assign them to either team.</p>
            <form>
                <label>Add Player Name </label>
                <input />
                <input type="submit"/>
            </form>
        </div>
    );
}            
            
export default AddNewPlayers;            