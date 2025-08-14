import React from 'react';

function IndianPlayers() {
  const T20 = ['Virat', 'Rohit', 'Gill', 'Pant'];
  const Ranji = ['Sarfaraz', 'Iyer', 'Jadeja', 'Unadkat'];

  // Merge arrays using spread operator
  const allPlayers = [...T20, ...Ranji];

  // Odd and Even teams using array destructuring
  const oddTeam = allPlayers.filter((_, index) => index % 2 !== 0);
  const evenTeam = allPlayers.filter((_, index) => index % 2 === 0);

  return (
    <div>
      <h2>All Merged Players</h2>
      <ul>
        {allPlayers.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>

      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player, i) => (
          <li key={i}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
