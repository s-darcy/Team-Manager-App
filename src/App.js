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
    
    tradeToBlue (redsPlayer, IDValue, event){
        event.preventDefault();
        
        //make copy of red Team's state with filter
        let curRedTeam = this.state.redTeam.redAcquired;
        
        console.log('The link was clicked.');
        console.log(IDValue);
        
        
        let newRedTeam = curRedTeam.filter(function(teamMember){
            console.log(redsPlayer.name);
            console.log(teamMember);
            return teamMember.name != redsPlayer.name;
        })
        
        
        this.setState({
            "this.redTeam" : newRedTeam
        });
        
        console.log(newRedTeam);
        
        //the player clicked on the Red Team
        
        
        //add that same player to the Blue team array
//        console.log(this.state.blueTeam.blueAcquired.push(tradingRedPlayer));
        
        
        //remove the selected player from the Reds array
//        let redPlayerRemoved = this.state.redTeam.redAcquired.slice(tradingRedPlayer);

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
                            bluesPlayer={player}
                            tradeToBlue={this.tradeToBlue}
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
