import React, { Component } from 'react';
import './App.css';
import TeamRed from './TeamRed';
import TeamBlue from './TeamBlue';
import FreeAgents from './FreeAgents';
import AddNewPlayers from './AddNewPlayers';
import ResetTeams from './ResetTeams';
import Player from './Player';
import data from './data';

class App extends Component {
    
    constructor() {
        super();
        this.state = data;
        this.newPlayerAdder = this.newPlayerAdder.bind(this);
    }

    newPlayerAdder (event){
        let newPlayerName = event.target.value;
        
    }
    
    render() {
        const playersUnassigned = 
        this.state.players.map(function(player, index){
            return (
                <ul>
                    <li>{player.name}</li>
                </ul>
            );
    }, this);

    return (

        <div id="container">
            <h1 id="teamManagerApp">Team Manager App</h1>
            <TeamRed />
            <TeamBlue />
            <FreeAgents  />
            {playersUnassigned}
            <AddNewPlayers />
            <ResetTeams />
        </div> 
    );
  }
}

export default App;
