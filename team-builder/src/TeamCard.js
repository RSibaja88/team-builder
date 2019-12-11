import React from 'react';


const TeamCard = props => {
    return (
        <div className="card-list">
            {props.teamCard.map(teamCard => (
                <div className="teamCard" key={teamCard.id}>
                <h2>{teamCard.teamMate}</h2>
                <p>{teamCard.study}</p>
                </div>
            ))}
        </div>
    );
};


    export default TeamCard;

