import React from 'react';

function GameCard({ img, opponent, date, time, stadium }) {
  return (
    <div className="card">
      <img src={img} alt={`${opponent} logo`} className="card-img" />
      <h3>vs. {opponent}</h3>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Time:</strong> {time}</p>
      <p><strong>Stadium:</strong> {stadium}</p>
    </div>
  );
}
export default GameCard;