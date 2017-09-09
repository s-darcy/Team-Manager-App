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
        this.tradeToBlue = this.tradeToBlue.bind(this);
        this.tradeToRed = this.tradeToRed.bind(this);
        this.freeAgentsAssignedRed = this.freeAgentsAssignedRed.bind(this);
        this.freeAgentsAssignedBlue = this.freeAgentsAssignedBlue.bind(this);
    }

    newPlayerAdder (event, players){
        event.preventDefault();
        
        let newPlayer = {"name": event.target.inputName.value, "position": ""};
        let existingPlayers = this.state.players;
        existingPlayers.push(newPlayer);
        
        this.setState({
            "players": existingPlayers
        });
    }
    
    tradeToBlue (redsPlayer, IDValue, event){
        event.preventDefault();
        
        //make copy of Red Team's state with filter
        let newRedTeam = Object.assign({}, this.state.redTeam); 
        
        //remove the selected player from the Reds array
        let newRedAcquired = newRedTeam.redAcquired.filter(function(teamMember){
            return teamMember !== redsPlayer;
        })
        
        newRedTeam.redAcquired = newRedAcquired;
        
        //add that same player to the Blue team array
        console.log(this.state.blueTeam.blueAcquired.push(redsPlayer))
        
        //save state
        this.setState({
            redTeam : newRedTeam
        });
    }
    
    tradeToRed (bluesPlayer, IDValue, event){
        event.preventDefault();
        
        //make copy of Blue Team's state
        let newBlueTeam = Object.assign({}, this.state.blueTeam); 
        
        //remove the selected player from the Blues array
        let newBlueAcquired = newBlueTeam.blueAcquired.filter(function(teamMember){
            return teamMember !== bluesPlayer;
        })
        newBlueTeam.blueAcquired = newBlueAcquired;
        
        //add that same player to the Red team array
        this.state.redTeam.redAcquired.push(bluesPlayer);
        
        //save state
        this.setState({
            blueTeam : newBlueTeam
        });
    }
    
    freeAgentsAssignedRed (bravesPlayer, event) {
       event.preventDefault();
        
        let curFreeAgent = this.state.players.slice();
        console.log(curFreeAgent);      
        let newFreeAgent = curFreeAgent.filter(function(teamMember){
            return teamMember !== bravesPlayer;
        });
        this.state.redTeam.redAcquired.push(bravesPlayer);
        
        this.setState({
            players : newFreeAgent
        });
    }
    
    freeAgentsAssignedBlue (bravesPlayer, event) {
       event.preventDefault();
        
        let curFreeAgent = this.state.players.slice();
        console.log(curFreeAgent);      
        let newFreeAgent = curFreeAgent.filter(function(teamMember){
            return teamMember !== bravesPlayer;
        });
        this.state.blueTeam.blueAcquired.push(bravesPlayer);
        
        this.setState({
            players : newFreeAgent
        });
    }
    
    backToFreeAgency (redsPlayer, event) {
        event.preventDefault();
    
        let newRedTeam = Object.assign({}, this.state.redTeam); 
        let newRedAcquired = newRedTeam.redAcquired.filter(function(teamMember){
            return teamMember !== redsPlayer;
        })
        
        newRedTeam.redAcquired = newRedAcquired;
        this.state.players.push(redsPlayer);
        
        //save state
        this.setState({
            redTeam : newRedTeam
        });
        
    }

    
    render() {
        
//        //Original Teams
        //So create a copy immediate of the Players array and store in separate object in data structure called copy. When person clicks reset dump the copy's info back into Player's
        
        
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
                       IDValue={index}    
                       bravesPlayer={player}
                       freeAgentsAssigned={this.freeAgentsAssigned}
                       freeAgentsAssignedRed={this.freeAgentsAssignedRed}
                       freeAgentsAssignedBlue={this.freeAgentsAssignedBlue}
                    />  
                );
            }, this);
        
        const redplayers = 
            this.state.redTeam.redAcquired.map(function(player, index){
                return (
                   <TeamRed
                       key={index}
                       IDValue={index} 
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
                            IDValue={index}
                            bluesPlayer={player}
                            tradeToRed={this.tradeToRed}
                        />
                    );
              }, this);    

    return (

        <div id="container">
            <h1 id="teamManagerApp">Team Manager App</h1>
               <div className="teamRed">
                    <h2>Red Team Players</h2>
                    <div className="innerDiv">
                        <ol>             
                            {redplayers}
                        </ol>
                    </div>
                </div>
                <div className="teamBlue">
                    <h2>Blue Team Players</h2>
                    <div className="innerDiv">
                        <ol>
                            {blueplayers}
                        </ol>
                    </div>
                </div>
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
