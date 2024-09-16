import React from 'react';
import './TopThree.css';

const TopThree = () => {
  const topUsers = [
    { name: 'Ashish', points: 198, prize: '₹111', rank: 2 },
    { name: 'Mahak', points: 230, prize: '₹21', rank: 1 },
    { name: 'Tejas', points: 82, prize: '₹10', rank: 3 },
  ];

  return (
    <div className="top-three">
      {topUsers.map((user) => (
        <div className={`top-user rank-${user.rank}`} key={user.name}>
          <div className="avatar">👤</div>
          <div className="user-info">
            <h4>{user.name}</h4>
            <p>{user.points} pts</p>
            <p>Prize: {user.prize}</p>
          </div>
        </div>
      ))}
      <div className="timer">Ends in 05h 47m 40s</div>
    </div>
  );
};

export default TopThree;
