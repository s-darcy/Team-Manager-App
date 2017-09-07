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
//        this.redTeamSetUp = this.redTeamSetUp.bind(this);
        this.tradeToBlue = this.tradeToBlue.bind(this);
    }
  
//    redTeamSetUp (players) {
//        let theReds = this.state.redTeam.redAquired;
//        
//        this.setState({
//            players: players
//        }); 
//    }
    
//    var styles = {
//      box: {
//        width: '100px',
//        height: '100px'
//      },
//      in: {
//        backgroundColor: 'red'
//      },
//      out: {
//        backgroundColor: 'green'
//      }
//    };

    newPlayerAdder (event, players){
        event.preventDefault();
        
        let newPlayer = {"name": event.target.inputName.value, "position": ""};
        let existingPlayers = this.state.players;
        existingPlayers.push(newPlayer);
        
        this.setState({
            "players": existingPlayers
        });
    }
    
    tradeToBlue (i, event){
        event.preventDefault();
        console.log('The link was clicked.');
        
        //the player clicked on the Red Team
        let tradingRedPlayer = event.currentTarget.value;
        console.log(tradingRedPlayer);
        
        //add that same player to the Blue team array
        console.log(this.state.blueTeam.blueAcquired.push(tradingRedPlayer));
        
        
        //remove the selected player from the Reds array
        let redPlayerRemoved = this.state.redTeam.redAcquired.slice(tradingRedPlayer);
        console.log(this.state.redTeam.redAcquired);
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
        
        
        
        const playersUnassigned = 
            this.state.players.map((player, index) => {
                return (
                    <FreeAgents 
                       key={index}    
                       bravesPlayer={player}
//                       newPlayerAdder={()=>{this.newPlayerAdder(index);}}
                    />
                    
                );
            }, this);
        
        const redplayers = 
            this.state.redTeam.redAcquired.map(function(player, index){
                return (
                   <TeamRed
                       key={index}
                       redsPlayer={player}
                       tradeToBlue={this.tradeToBlue}    
                    />
                );
            }, this);
        
            const blueplayers = 
                this.state.blueTeam.blueAcquired.map(function(player, index){
                    return (
                        <TeamBlue 
                            key={index}
                            bluesPlayer={player}
                            tradeToBlue={this.tradeToBlue}
                        />
                    );
              }, this);    

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
            <AddNewPlayers 
                newPlayerAdder={this.newPlayerAdder}
            />
            <ResetTeams />
        </div> 
    );
  }
}

export default App;
