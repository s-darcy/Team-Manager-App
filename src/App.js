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
        this.redTeamSetUp = this.redTeamSetUp.bind(this);
    }
    
    redTeamSetUp (players) {
        let theReds = this.state.redTeam.redAquired.name.slice();
        
        this.setState({
            players: players
        }); 
    }

    newPlayerAdder (event, players){
        let newPlayerName = event.target.value;
        let existingPlayers = Object.assign({}, this.state.players); 
        existingPlayers.freeAgents.newPlayerName = newPlayerName;
        
        this.setState({
            newPlayerName: players
        });
    }
    
    render() {
        const playersUnassigned = 
        this.state.players.map(function(player, index){
            return (
                    <li >{player.name}</li>
            );
        }, this);
        
        const redplayers = 
        this.state.redTeam.redAquired.map(function(player, index){
            return (
                    <li >{player.name}</li>
            );
        }, this);
        
            const blueplayers = 
        this.state.blueTeam.blueAquired.map(function(player, index){
            return (
                    <li >{player.name}</li>
            );
      }, this);    

    return (

        <div id="container">
            <h1 id="teamManagerApp">Team Manager App</h1>
            <TeamRed
                redTeamSetUp = {this.redTeamSetUp}
                redTeam={this.state.redTeam.redAquired[0].redTeam}
            />
                <ol>
                    {redplayers}
                </ol>
            <TeamBlue />
                <ol>
                    {blueplayers}
                </ol>
            <FreeAgents  />
                <ol className="playersUnassigned">
                    {playersUnassigned}
                </ol>
            <AddNewPlayers />
            <ResetTeams />
        </div> 
    );
  }
}

export default App;
