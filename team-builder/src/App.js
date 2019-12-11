import React, { useState } from 'react';
import './App.css';
import TeamMateCard from "./TeamMateCard";
import TeamCard from "./TeamCard";

function App() {
  const [teamCard, setTeamCard] = useState([
    {
      id: 1,
      teamMate: "Rodrigo Sibaja",
      email: "rodrigosibaja88@outlook.com",
      role: "Full Stack Web Dev"
    }
  ]);

  const addTeamMate = card => {
    const newCard = {
      id: Date.now(),
      teamMate: card.teamMate,
      email: card.email,
      role: card.role
    };
    setTeamCard([...teamCard, newCard]);
  };


  return (
    <div className="App">
      <header className="App-header">Build Your Team!</header>
      <TeamMateCard addTeamMate={addTeamMate} />
      <TeamCard teamCard={teamCard} />     
    </div>
  );
}

export default App;
