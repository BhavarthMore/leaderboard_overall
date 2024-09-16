import React from 'react';
import './LeaderboardList.css';

const LeaderboardList = () => {
  const users = [
    { name: 'Manoj', rank: 4, prize: '₹7' },
    { name: 'AMIT', rank: 5, prize: '₹6' },
    { name: 'Karan', rank: 6, prize: '₹5' },
    { name: 'JAGA', rank: 7, prize: '₹4' },
    // Add more users as needed
  ];

  return (
    <div className="leaderboard-list">
      {users.map((user) => (
        <div className="user-row" key={user.rank}>
          <div className="avatar">👤</div>
          <div className="user-info">
            <h4>{user.name}</h4>
            <p>Rank: {user.rank}</p>
            <p>Prize: {user.prize}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeaderboardList;
