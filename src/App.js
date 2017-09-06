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

        console.log(data);
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
    
    tradeToBlue (){
        //Grab the current Red team
        let theReds = this.state.redTeam.redAquired.name.slice();
        console.log(theReds);
        //remove the selected player from the Reds array
        //add that same player to the Blue team array
        //save state
    }
    
    render() {
        
//        //Original Teams
//        const originalTeams = data.slice();
//        
//        //Resets the teams back to the original state
//            Reset() {
//                return (
//                    {originalTeams}
//                );
//            }
//        
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
                   <TeamRed
                       key={index}
                       redsPlayer={player} 
                    />
                );
            }, this);
        
            const blueplayers = 
                this.state.blueTeam.blueAcquired.map(function(player, index){
                    return (
                        <TeamBlue 
                            key={index}
                            bluesPlayer={player}
                        />
                    );
              }, this);    

        
        console.log(this.state);
    return (

        <div id="container">
            <h1 id="teamManagerApp">Team Manager App</h1>
                    {redplayers}
                    {blueplayers}
            <div className="freeAgents">
            <h2>Free Agents</h2>
                <p>These players are currently unassigned to either team. Would like to add them to a team?</p>
                <div className="freeAgentColumns">
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
