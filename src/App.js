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
            this.state.players.map((player, index) => {
                return (
                    <FreeAgents 
                       key={index}
                       bravesPlayer={player} 
                    />
                    
                );
            }, this);
        
        const redplayers = 
        this.state.redTeam.redAcquired.map(function(player, index){
            return (
                    <li >{player.name}</li>
            );
        }, this);
        
            const blueplayers = 
        this.state.blueTeam.blueAcquired.map(function(player, index){
            return (
                    <li >{player.name}</li>
            );
      }, this);    

        
        console.log(this.state);
    return (

        <div id="container">
            <h1 id="teamManagerApp">Team Manager App</h1>
            <TeamRed
                
            />
                <ol>
                    {redplayers}
                </ol>
            <TeamBlue />
                <ol>
                    {blueplayers}
                </ol>
            <div className="freeAgents">
            <h2>Free Agents</h2>
                <p>These players are currently unassigned to either team. Would like to add them to a team?</p>
                <div className="innerDiv">
                    {playersUnassigned}
                </div>
            </div>    
            <AddNewPlayers />
            <ResetTeams />
        </div> 
    );
  }
}

export default App;
