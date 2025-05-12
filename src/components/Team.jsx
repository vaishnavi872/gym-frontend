import React from 'react';
import '../styles/Team.css';
import { teamData } from '../data/data';



const Team = () => {
  return (
    <section className="team-section" id="team">
      <div className="team-header">
        <h5>MEET OUR EXPERTS</h5>
        <h2>OUR TRAINERS</h2>
      </div>
      <div className="team-sidebar">
        <div className="team-list">
          {teamData.map((trainer, index) => (
            <div className="team-card" key={index}>
              <img src={trainer.image} alt={trainer.name} />
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <p>{trainer.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
