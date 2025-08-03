// src/ListofPlayers.jsx
import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 45 },
    { name: 'Jasprit Bumrah', score: 78 },
    { name: 'Ravindra Jadeja', score: 60 },
    { name: 'KL Rahul', score: 88 },
    { name: 'Hardik Pandya', score: 40 },
    { name: 'Shubman Gill', score: 92 },
    { name: 'Mohammed Shami', score: 55 },
    { name: 'Axar Patel', score: 73 },
    { name: 'Ishan Kishan', score: 67 },
    { name: 'Suryakumar Yadav', score: 81 }
  ];

  // Arrow function + filter
  const filteredPlayers = players.filter(player => player.score >= 70);

  return (
    <div>
      <h2>Players with Score ≥ 70</h2>
      <ul>
        {filteredPlayers.map((player, index) => (
          <li key={index}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListofPlayers;
