import React, { useState } from 'react';


const TeamMateCard = ({ addTeamMate }) => {
    const [card, setCard] = useState({teamMate: "", email: "", role: ""});

    const updateInfo = event => {
        console.log("event", event.target.value);
        setCard({...card, [event.target.name]: event.target.value});
    };

    const submitForm = event => {
        event.preventDefault();
        addTeamMate(card);
    };

    return (
        <form onSubmit={submitForm}>
            <label htmlFor="teamMate">Team Mate's Name: </label>
            <input
            id="teamMate"
            type="text"
            name="teamMate"
            placeholder="Enter a name"
            onChange={updateInfo}
            value={card.teamMate}
            />
            <label htmlFor="email">Email: </label>
            <textarea
            id="email"
            name="email"
            placeholder="Enter email address"
            onChange={updateInfo}
            value={card.email}
            />
            <label htmlFor="role">Project Role: </label>
            <textarea
            id="role"
            name="role"
            placeholder="Enter role for this project..."
            onChange={updateInfo}
            value={card.role}
            />
            <button type="submit">Add Team Mate!</button>
        </form>
    );
};

export default TeamMateCard;