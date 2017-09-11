import React, { Component } from 'react';
import './App.css';
import TeamRed from './TeamRed';
import TeamBlue from './TeamBlue';
import FreeAgents from './FreeAgents';
import AddNewPlayers from './AddNewPlayers';
import ResetTeams from './ResetTeams';
import Player from './Player';
import data from './data';
import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    
    constructor() {
        super();
        this.state = data;

        this.newPlayerAdder = this.newPlayerAdder.bind(this);
        this.tradeToBlue = this.tradeToBlue.bind(this);
        this.tradeToRed = this.tradeToRed.bind(this);
        this.freeAgentsAssignedRed = this.freeAgentsAssignedRed.bind(this);
        this.freeAgentsAssignedBlue = this.freeAgentsAssignedBlue.bind(this);
        this.redBackToFreeAgency = this.redBackToFreeAgency.bind(this);
        this.blueBackToFreeAgency = this.blueBackToFreeAgency.bind(this);
        this.copyOriginal = this.copyOriginal.bind(this);
        this.resetOriginal = this.resetOriginal.bind(this);
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
        let newFreeAgent = curFreeAgent.filter(function(teamMember){
            return teamMember !== bravesPlayer;
        });
        this.state.blueTeam.blueAcquired.push(bravesPlayer);
        
        this.setState({
            players : newFreeAgent
        });
    }
    
    redBackToFreeAgency (redsPlayer, event) {
        event.preventDefault();
    
        let curRedTeam = Object.assign({}, this.state.redTeam);  
             
        let newRedTeam = curRedTeam.redAcquired.filter(function(teamMember){
            return teamMember !== redsPlayer;
        });
        curRedTeam.redAcquired = newRedTeam;
        
        this.state.players.push(redsPlayer);
        
        this.setState({
            redTeam : curRedTeam
        });
    }
    
    blueBackToFreeAgency (bluesPlayer, event) {
        event.preventDefault();

        let curBlueTeam = Object.assign({}, this.state.blueTeam);
             
        let newBlueTeam = curBlueTeam.blueAcquired.filter(function(teamMember){
            return teamMember !== bluesPlayer;
        });
        curBlueTeam.blueAcquired = newBlueTeam;

        this.state.players.push(bluesPlayer);
        
        this.setState({
            blueTeam : curBlueTeam 
        });
    }
           
    //Resets the teams back to the original state
    copyOriginal () {
        let curPlayers = this.state.players.slice();
        let curRedTeam = this.state.redTeam.redAcquired.slice();
        let curBlueTeam = this.state.blueTeam.blueAcquired.slice();
        
        this.setState({
            copyPlayers : curPlayers 
        });
        this.setState({
            copyRedTeam : curRedTeam
        });
        this.setState({
            copyBlueTeam : curBlueTeam 
        });    
    }
    
     componentDidMount() {
        window.addEventListener('load', this.copyOriginal);
     }

    resetOriginal (originalPlayers, originalRedTeam, originalBlueTeam, event){
        event.preventDefault();
        
        let playersToReset = this.state.player.slice();
        let redTeamToReset = Object.assign({}, this.state.redTeam);
        let blueTeamToReset = Object.assign({}, this.state.blueTeam);
        console.log(playersToReset);
        console.log(redTeamToReset);
;        
        //Free Agent Original Players
        let playersComparison = playersToReset.filter(function(teamMembers){
            return teamMembers !== originalPlayers;
        });
        playersToReset = playersComparison;
        this.state.players.push(originalPlayers);
        this.setState({
            players : playersToReset
        }); 
        
        
        //Red Team Original Players
        let redTeamComparison = redTeamToReset.filter(function(teamMembers){
            return teamMembers !== originalRedTeam;
        });
        redTeamToReset.redAcquired = playersComparison;
        this.state.redTeam.redAcquired.push(originalRedTeam);
        this.setState({
            redTeam :  redTeamToReset
        });
        

        // Blue Team Original Players
        let blueTeamComparison = blueTeamToReset.filter(function(teamMembers){
            return teamMembers !== originalBlueTeam;
        });
        blueTeamToReset.blueAcquired = playersComparison;
        this.state.blueTeam.blueAcquired.push(originalBlueTeam);
        this.setState({
            blueTeam : blueTeamToReset
        }); 
    }
    
    render() {
        
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
                       reset={this.resetOriginal}
                    />  
                );
            }, this);
        
        let redplayers = 
            this.state.redTeam.redAcquired.map(function(player, index){
                return (
                   <TeamRed
                       key={index}
                       IDValue={index} 
                       redsPlayer={player}
                       tradeToBlue={this.tradeToBlue}   
                       redBackToFreeAgency={this.redBackToFreeAgency}
                       reset={this.resetOriginal}
                    />
                );
            }, this);
        
        let blueplayers = 
            this.state.blueTeam.blueAcquired.map(function(player, index){
                return (
                    <TeamBlue 
                        key={index}
                        IDValue={index}
                        bluesPlayer={player}
                        tradeToRed={this.tradeToRed}
                        blueBackToFreeAgency={this.blueBackToFreeAgency}
                        reset={this.resetOriginal}
                    />
                );
          }, this);
         
        let playersReset = 
             this.state.copyOriginal.copyPlayers.map(function(players,  index){
                return (
                    <ResetTeams
                        originalPlayers={players}
                        reset={this.resetOriginal}
                        copy={this.copyOriginal}
                    />
                 );
          }, this);
        
        let redTeamReset  = this.state.copyOriginal.copyRedTeam.copyRedAcquired.map(function(players, index){
                return (
                    <ResetTeams
                        originalRedTeam={players}
                        reset={this.resetOriginal}
                        copy={this.copyOriginal}
                    />
                 );
          }, this);
        
        let blueTeamReset =  this.state.copyOriginal.copyBlueTeam.copyBlueAcquired.map(function(players, index){
                return (
                    <ResetTeams
                        originalBlueTeam={players}
                        reset={this.resetOriginal}
                        copy={this.copyOriginal}
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
            <div className="resetTeam">
                <h2>Reset Team Assignment</h2>
                <p>By pushing the 'Reset Teams' button below, you will be clearing your current team's players back to their original assignments. Are you sure that you want to change the team's?</p>
                {playersReset}
                {redTeamReset}
                {blueTeamReset}
            </div>
        </div> 
    );
  }
}

export default App;
