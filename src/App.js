import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TeamRed from './TeamRed';
import TeamBlue from './TeamBlue';
import FreeAgents from './FreeAgents';
import AddNewPlayers from './AddNewPlayers';
import ResetTeams from './ResetTeams';
import data from './data';

class App extends Component {
    
    
  render() {

    return (
        <div id="container">
            <h1 id="teamManagerApp">Team Manager App</h1>
            <TeamRed />
            <TeamBlue />
            <FreeAgents />
            <AddNewPlayers />
            <ResetTeams />
        </div> 
    );
  }
}

export default App;
